const securityQuestion = require('../models/securityQuestion');
const { customValidator } = require('../helpers/validator');
const { alreadyExists } = require('../helpers/database');
const { ClientError } = require('../helpers/error');
const pagination = require('../helpers/pagination');
const router = require('express').Router();

router.post('/', async (req, res, next) => {
    try {
        const validationError = customValidator(req.body, {
            question: { nullable: false }
        });
        if (validationError) {
            next(validationError);
            return;
        }
        const questionAlreadyExists = await alreadyExists(securityQuestion, {
            question: req.body.question
        });

        if (!questionAlreadyExists) {
            next(questionAlreadyExists);
            return;
        }

        const results = await securityQuestion.create({
            question: req.body.question
        });

        res.status(201).send({
            response: { message: `Security question ${results.id} was created.`, id: results.id }
        });
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    let results = null;
    try {
        if ((req.body && req.body.id) || (req.query && req.query.id)) {
            const id = req.body.id ? req.body.id : req.query.id ? parseInt(req.query.id) : null;
            results = await securityQuestion.findOne({
                where: { id: id },
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            });
            if (!results) {
                next(new ClientError(400, `IDs [${id}] don't exist`));
                return;
            }
        } else {
            results = await pagination(
                securityQuestion,
                { limit: req.query.limit, currentPage: req.query.page },
                {
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                }
            );
        }
    } catch (error) {
        next(error);
    }
    res.send({ response: results });
});

router.put('/', async (req, res, next) => {
    let results = null;
    try {
        results = await securityQuestion.update(
            { question: req.body.question },
            {
                where: { id: req.body.id }
            }
        );
    } catch (error) {
        next(error);
    }
    res.send({ response: results });
});

router.delete('/', async (req, res, next) => {
    try {
        const id = req.body.id ? req.body.id : req.query.id ? parseInt(req.query.id) : null;
        const results = await securityQuestion.destroy({
            where: { id: id }
        });
        if (!results) {
            next(new ClientError(400, `IDs [${id}] don't exist`));
            return;
        }
        res.send({ response: `Question [${req.body.id}] deleted` });
    } catch (error) {
        next(error);
    }
});

module.exports = { router, version: 1 };
