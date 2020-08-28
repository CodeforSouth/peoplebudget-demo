const profilepicture = require('../models/profilePicture');
const router = require('express').Router();
const { customValidator } = require('../helpers/validator');
const { ClientError } = require('../helpers/error');

router.post('/', async (req, res, next) => {
    const validationError = customValidator(req.body, {
        image: null
    });
    if (validationError) {
        next(validationError);
        return;
    }
    try {
        const {
            body: { image }
        } = req;
        const newPicture = await profilepicture.create({
            image: image
        });
        res.header('Location', `api/image/v1/?id=${newPicture.id}`);
        res.statusCode = 201;
        res.send({ response: 'profile picture created' });
    } catch (error) {
        next(new ClientError(400, error.message));
    }
});
router.get('/', async (req, res, next) => {
    let results = null;
    try {
        if (req.query.hasOwnProperty('id')) {
            results = await profilepicture.findOne({
                where: {
                    id: req.query.id
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            });
        }
        if (!results) {
            next(new ClientError(400, `Image id ${req.query.id} doesn't exist`));
            return;
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
        image: null
    });
    if (validationError) {
        next(validationError);
        return;
    }
    try {
        const {
            body: { image }
        } = req;
        result = await profilepicture.update(
            { image },
            {
                where: { id: req.query.id }
            }
        );
        if (result.length === 1 && result[0] === 0) {
            next(new ClientError(400, `id ${req.body.id} doesn't exist`));
            return;
        }
        res.send({ response: `image updated` });
    } catch (error) {
        next(error);
    }
});
router.delete('/', async (req, res, next) => {
    try {
        let result = null;
        if (!Array.isArray(req.body.id)) {
            result = await profilepicture.destroy({
                where: { id: req.body.id }
            });

            if (!result) {
                next(new ClientError(400, `id ${req.body.id} doesn't exist`));
                return;
            }
            res.send({ response: `Id ${req.body.id} was deleted` });
        } else {
            result = await profilepicture.destroy({
                where: { id: req.body.id }
            });
            if (!result) {
                next(new ClientError(400, `ids [${req.body.id.join(', ')}] don't exist`));
                return;
            }
            res.send({
                response: `images [${req.body.id.join(', ')}] deleted`
            });
        }
    } catch (error) {
        next(error);
    }
});

module.exports = { router, version: 1 };
