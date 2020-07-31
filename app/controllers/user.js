const user = require('../models/user');
const router = require('express').Router();
const { adminRequired } = require('../middleware/requiredPermissions');
const { hash } = require('../helpers/hash');
const { customValidator } = require('../helpers/validator');
const { alreadyExists } = require('../helpers/database');
const { ClientError } = require('../helpers/error');
const pagination = require('../helpers/pagination');

router.post('/', async (req, res, next) => {
    const validationError = customValidator(req.body, {
        email: { type: 'email', nullable: false },
        roleid: { nullable: false },
        linkedinurl: { nullable: true },
        budgetitem: { nullable: false, max: 100 },
        image: { nullable: true },
        address1: { nullable: false },
        address2: { nullable: false },
        securityQuestion: { nullable: false },
        age: { type: 'numeric', nullable: false },
        income: { type: 'numeric', nullable: true },
        occupation: { nullable: true, max: 50 },
        fname: { nullable: false, min: 2, max: 15 },
        lname: { nullable: false, min: 2, max: 15 },
        zip: { type: 'numeric', nullable: false },
        pass: { nullable: false },
        recover: { nullable: false, max: 30 }
    });
    if (validationError) {
        next(validationError);
        return;
    }
    const {
        body: {
            email,
            fname,
            lname,
            age,
            pass,
            recover,
            securityQuestion,
            roleid,
            linkedinurl,
            image,
            address1,
            address2,
            zip,
            income,
            occupation,
            budgetitem
        }
    } = req;
    try {
        await alreadyExists(user, {
            email: req.body.email
        });
        const newUser = await user.create({
            email: email,
            lastName: lname,
            firstName: fname,
            age: age,
            hash: await hash(pass),
            recoveryHash: await hash(recover),
            securityQuestion: securityQuestion,
            image: image,
            RoleId: roleid,
            address1: address1,
            address2: address2,
            zip: zip,
            linkedinurl: linkedinurl,
            annualIncome: income,
            occupation: occupation,
            budgetItem: budgetitem
        });
        res.header('Location', `api/v1/user/?id=${newUser.id}`);
        res.statusCode = 201;
        res.send({ response: 'user created' });
    } catch (error) {
        next(error);
    }
});
router.get('/', async (req, res, next) => {
    let results;
    try {
        if (req.query.hasOwnProperty('id')) {
            results = await user.findOne({
                where: { id: req.query.id },
                attributes: {
                    exclude: ['hash', 'recoveryHash', 'createdAt', 'updatedAt', 'securityQuestion']
                }
            });
            if (!results) {
                next(new ClientError(400, `id ${req.query.id}doesn't exist`));
                return;
            }
        } else {
            results = await pagination(
                user,
                { limit: req.query.limit, currentPage: req.query.page },
                {
                    attributes: {
                        exclude: [
                            'hash',
                            'recoveryHash',
                            'createdAt',
                            'updatedAt',
                            'securityQuestion'
                        ]
                    }
                }
            );
        }
        res.send({ response: results });
    } catch (error) {
        next(error);
    }
});
router.put('/', async ({ body, query: { id } }, res, next) => {
    let result = null;
    try {
        result = await user.update(
            { ...body },
            {
                where: { id: id }
            }
        );
        if (result.length === 1 && result[0] === 0) {
            next(new ClientError(400, `Id ${id} not found or No changes were made`));
            return;
        }
        res.send({ response: 'user info updated' });
    } catch (error) {
        next(error);
    }
});
router.delete('/', async (req, res, next) => {
    try {
        let result = null;
        if (Array.isArray(req.body.id)) {
            result = await user.destroy({
                where: { id: req.body.id }
            });
            if (!result) {
                next(new ClientError(400, `IDs [${req.body.id.join(' , ')}] don't exist`));
                return;
            }
            res.send({ response: `Users [${req.body.id.join(' , ')}] deleted` });
        } else {
            result = await user.destroy({
                where: { id: req.body.id }
            });
            if (!result) {
                next(new ClientError(400, `ID ${req.body.id} doesn't exist`));
                return;
            }
            res.send({ response: `User ${req.body.id} deleted` });
        }
    } catch (error) {
        next(error);
    }
});

module.exports = { router, version: 1 };
