const profilePicture = require('../models/profilePicture');
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
    const {
        body: { image }
    } = req;
    
});

module.exports = { router, version: 1 };
