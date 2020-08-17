const Comment = require('../models/comment');
const router = require('express').Router();
const { customValidator } = require('../helpers/validator');
const { ClientError } = require('../helpers/error');
const pagination = require('../helpers/pagination');

router.post('/', async (req, res, next) => {
    const validationError = customValidator(req.body, {
        userId: { type: 'numeric' },
        postId: { type: 'numeric' },
        commentBody: { nullable: false }
    });
    if (validationError) {
        next(validationError);
        return;
    }
    const {
        body: { userId, postId, commentBody }
    } = req;
    try {
        const comment = await Comment.create({
            UserId: userId,
            PostId: PostId,
            body: commentBody
        });
        res.header('Location', `api/v1/comment/?id=${comment.id}`);
        res.statusCode = 201;
        res.send({ response: 'comment created' });
    } catch (error) {
        next(error);
    }
});
router.get('/', async (req, res, next) => {
    let results = null;
    try {
        const {
            query: { id, userId }
        } = req;
        if (req.query.hasOwnProperty('id')) {
            results = await Comment.findOne({
                where: { id },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            });
            if (!results) {
                next(new ClientError(400, `id ${req.query.id} doesn't exist`));
                return;
            }
            res.send({ response: results });
        } else if (req.query.hasOwnProperty('userId')) {
            results = await pagination(
                Comment,
                {
                    limit: req.query.limit,
                    currentPage: req.query.page,
                    where: { userId },
                    order: [['createdAt', 'DESC']]
                },
                {
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'userid']
                    }
                }
            );
            res.send({ response: results });
        } else {
            res.send({ response: 'Please specify comment ID or user ID' });
        }
    } catch (error) {
        next(error);
    }
});
router.put('/', async (req, res, next) => {
    let result = null;
    const validationError = customValidator(req.body, {
        commentBody: { nullable: false }
    });
    if (validationError) {
        next(validationError);
        return;
    }
    try {
        const {
            body: { commentBody },
            query: { id }
        } = req;
        result = await Comment.update(
            { commentBody },
            {
                where: { id }
            }
        );
        if (result.length === 1 && result[0] === 0) {
            next(
                new ClientError(400, `id '${req.body.id}' doesn't exist or no changes were made.`)
            );
            return;
        }
        res.send({ response: 'The comment has been updated' });
    } catch (error) {
        next(error);
    }
});
router.delete('/', async (req, res, next) => {
    let result = null;
    const validationError = customValidator(req.body, {
        id: { type: 'numeric', array: true }
    });
    if (validationError) {
        next(validationError);
        return;
    }
    try {
        const {
            body: { id }
        } = req;
        console.warn(id);
        result = await Comment.destroy({
            where: { id }
        });
        if (result === 0) {
            next(new ClientError(400, `id '${id}' doesn't exist`));
            return;
        }
        res.send({ response: 'The comment has been deleted' });
    } catch (error) {
        next(error);
    }
});

module.exports = { router, version: 1 };
