const post = require('../models/post');
const router = require('express').Router();
const { customValidator } = require('../helpers/validator');
const { ClientError } = require('../helpers/error');
const pagination = require('../helpers/pagination');
const { Client, Status } = require('@googlemaps/google-maps-services-js');

router.post('/', async (req, res, next) => {
    const validationError = customValidator(req.body, {
        userId: null,
        body: null,
        comments: null,
        coords: null, // Maybe Rename to Address -> format used by the national postal service
        title: null,
        tags: null,
        votes: null
    });
    if (validationError) {
        next(validationError);
        return;
    }
    try {



        let {
            body: { body, comments, coords, userId, title, tags, votes }
        } = req; /*
        const addressToCoords = function (coords) {
            return new Promise((resolve, reject) => {
                const client = new Client({});
                client.geocode(
                    {
                        params: { address: coords, key: 'AIzaSyCiefzWgtrz1DRgsbf8bgLqxFZn0LQi60g' }
                    },
                    (err, res) => {
                        if (err) reject(err);
                        else resolve(res.data.results[0].geometry.location);
                    }
                );
            });
        };*/
        /*
        try {
            const client = new Client({});

            const response = client.geocode({
                params: { address: coords, key: 'AIzaSyCiefzWgtrz1DRgsbf8bgLqxFZn0LQi60g' }
            });

            coords = await response.data.results[0];
            console.log('Coord: ', resolve.data.results[0]);

            //console.log('Coord: ', address);
        } catch (error) {
            next(error);
        }
*/

        try {
            const client = new Client({});
            const promiseRes = client.geocode({
                params: { address: coords, key: 'AIzaSyCiefzWgtrz1DRgsbf8bgLqxFZn0LQi60g' }
            });

            coords = await (await promiseRes).data.results[0].geometry.location;
        } catch (err) {
            next(err);
        } finally {
            // Log out Geocoded fields
            console.log('Comment: ', comments);
            console.log('Coord: ', coords);

            /* DB does not support added fields
        const newPost = await post.create({
            userId: userId,
            body: body,
            title: title,
            tags: tags,
            votes: votes
        });
*/

            res.header('Location', `api/v1/post/?id=${'newPost.id'}`);
            res.statusCode = 201;
            res.send({ response: 'post created' });
        }
    } catch (error) {
        next(error);
    }
});
router.get('/', async (req, res, next) => {
    let results;
    try {
        if (req.query.hasOwnProperty('postedby')) {
            results = await post.findAll({
                where: {
                    userId: req.query.postedby
                },
                order: [['createdAt', 'DESC']],
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'UserId']
                }
            });

            if (results.length === 0) {
                next(new ClientError(400, `id '${req.query.postedby}' doesn't exist`));
                return;
            }
        } else if (req.query.hasOwnProperty('Id')) {
            results = await post.findOne({
                where: { id: req.query.id },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            });
            if (!results) {
                next(new ClientError(400, `id '${req.query.id}' doesn't exist`));
                return;
            }
        } else {
            results = await pagination(
                post,
                { limit: req.query.limit, currentPage: req.query.page },
                {
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                }
            );
        }

        res.send({ response: results });
    } catch (error) {
        next(error);
    }
});
router.put('/', async (req, res, next) => {
    let result = null;
    const validationError = customValidator(req.body, {
        id: null,
        title: null,
        tags: null,
        votes: null
    });
    if (validationError) {
        next(validationError);
        return;
    }
    try {
        const {
            body: { title, tags, votes }
        } = req;
        result = await post.update(
            { title, tags, votes },
            {
                where: { id: req.body.id }
            }
        );
        if (result.length === 1 && result[0] === 0) {
            next(new ClientError(400, `id '${req.body.id}' doesn't exist`));
            return;
        }
        res.send({ response: 'post info updated' });
    } catch (error) {
        next(error);
    }
});
router.delete('/', async (req, res, next) => {
    try {
        let result = null;
        if (!Array.isArray(req.body.id)) {
            result = await post.destroy({
                where: { id: req.body.id }
            });
            if (!result) {
                next(new ClientError(400, `id '${req.body.id}' doesn't exist`));
                return;
            }
            res.send({ response: `post '${req.body.id}' was deleted` }); // Tell User
        } else {
            result = await post.destroy({
                where: { id: req.body.id }
            });
            if (!result) {
                next(new ClientError(400, `ids [${req.body.id.join(', ')}] don't exist`));
                return;
            }
            res.send({ response: `posts [${req.body.id.join(', ')}] deleted` });
        }
    } catch (error) {
        next(error);
    }
});
router.post('/create-post', async (req, res, next) => {
    const validationError = customValidator(req.body, {
        userId: null,
        body: null,
        title: null,
        tags: null,
        votes: null
    });
    if (validationError) {
        next(validationError);
        return;
    }
    try {
        const {
            body: { userId, body, title, tags, votes }
        } = req;

        const newPost = await post.create({
            userId: userId,
            body: body,
            title: title,
            tags: tags,
            votes: votes
        });

        res.header('Location', `api/v1/post/?id=${newPost.id}`);
        res.statusCode = 201;
        res.send({ response: 'post created' });
    } catch (error) {
        next(error);
    }
});

module.exports = { router, version: 1 };
