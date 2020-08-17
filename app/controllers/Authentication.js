/**
 * @module routes/auth
 */
const user = require('../models/user');
const { hash, compare } = require('../helpers/hash');
const { customValidator } = require('../helpers/validator');
const { alreadyExists } = require('../helpers/database');
const { ClientError } = require('../helpers/error');

// testing it
const { checkPermissions } = require('../middleware/requiredPermissions');

/**
 * Express router to handle user authentication.
 * @type {object}
 * @const
 * @namespace authRouter
 */
const router = require('express').router();
const { encode, decode } = require('../helpers/jwt');

/**
 * Register API Controller.
 * @name auth/versionnumber/register[POST]
 * @memberof module:routes/auth~authRouter
 * @method
 * @inner
 * @param {string} path - Express path
 * @param {callback} controller - Express controller.
 */
router.post(`/register`, async (req, res, next) => {
    // valiate user input
    const validationError = customValidator(req.body, {
        email: null,
        fname: null,
        lname: null,
        pass: null,
        address1: null,
        address2: null,
        recover: null,
        securityQuestion: null
    });

    // throw error is validation fails
    if (validationError) {
        next(validationError);
        return;
    }

    // destructure user input
    const {
        body: {
            email,
            fname,
            lname,
            pass,
            recover,
            securityQuestion,
            linkedinurl,
            image,
            address1,
            address2,
            zip
        }
    } = req;

    try {
        await alreadyExists(user, {
            email: email
        });

        await user.create({
            email: email,
            lastName: lname,
            firstName: fname,
            hash: await hash(pass),
            recoveryHash: await hash(recover),
            securityQuestion: securityQuestion,
            image: image,
            authLevel: 1,
            address1: address1,
            address2: address2,
            zip: zip,
            linkedinurl: linkedinurl
        });

        res.statusCode = 201;
        res.send({ response: 'User registered!' });
    } catch (error) {
        next(error);
    }
});

/**
 * Login API Controller.
 * @name auth/versionnumber/login[POST]
 * @memberof module:routes/auth~authRouter
 * @method
 * @inner
 * @param {string} path - Express path
 * @param {callback} controller - Express controller.
 */
router.post(`/login`, async (req, res, next) => {
    console.log(req.body);
    try {
        // destructure body
        const {
            body: { email, pass }
        } = req;

        // if required fields are missing
        const validationError = customValidator(req.body, {
            email: { min: 1 },
            pass: { min: 1 }
        });
        if (validationError) {
            next(validationError);
            return;
        }

        // find user based on email and password hash
        const aUser = await user.findOne({
            where: {
                email: email
            }
        });
        // check hash
        const passMatch = await compare(pass, aUser.hash);

        if (passMatch) {
            // create jwt token
            const token = await encode({
                id: aUser.id,
                email: aUser.email,
                auth: aUser.authLevel, // testing user role logic
                exp: Math.floor(Date.now() / 1000) + 60 * 15
            });
            res.cookie('token', token, { maxAge: 900000, httpOnly: true });
            res.cookie(
                'refresh_token',
                await encode({ exp: Math.floor(Date.now() / 1000) + 60 * 15 }),
                { httpOnly: true }
            );
            res.send({ response: 'Login Successful!' });
        } else {
            next(new ClientError(400, 'Bad Username/Password.'));
        }
    } catch (error) {
        next(error);
    }
});

/**
 * logout API Controller.
 * @name auth/versionnumber/logout[POST]
 * @memberof module:routes/auth~authRouter
 * @method
 * @inner
 * @param {string} path - Express path
 * @param {callback} controller - Express controller.
 */
router.post(`/logout`, checkPermissions, async (req, res, next) => {
    try {
        throw new Error('test error');
        res.send('logout');
    } catch (error) {
        next(error);
    }
});

/**
 * refresh API Controller.
 * @name auth/versionnumber/refresh[POST]
 * @memberof module:routes/auth~authRouter
 * @method
 * @inner
 * @param {string} path - Express path
 * @param {callback} controller - Express controller.
 */
router.post(`/refresh`, checkPermissions, async (req, res, next) => {
    try {
        // console.log(req.cookies.refresh_token);
        if (!req.cookies.refresh_token) {
            next(new ClientError(400, 'Missing refresh token'));
            return;
        }

        let decoded = await decode(req.cookies.refresh_token);
        if (!decoded) {
            next(new ClientError(401, 'Token invalid.'));
            return;
        }

        console.log(new Date(decoded.exp * 1000), Date());
        // console.log(decoded.exp <= Date.now() / 1000);

        if (decoded.exp <= Date.now() / 1000) {
            next(new ClientError(401, 'Token Expired'));
            return;
        }

        // find user based on email and password hash
        decoded = await decode(req.cookies.token);

        const token = await encode({
            id: decoded.id,
            email: decoded.email,
            role: decoded.role, // testing user role logic
            exp: Math.floor(Date.now() / 1000) + 60 * 15 // 15 min expiration
        });
        res.cookie('token', token, { maxAge: 900000, httpOnly: true });
        res.cookie(
            'refresh_token',
            await encode({
                exp: Math.floor(Date.now() / 1000) + 60 * 15
            }),
            { httpOnly: true }
        );

        res.send({ response: 'Refresh Successful!' });
    } catch (error) {
        next(error);
    }
});

router.get('/test', checkPermissions, async (req, res, next) => {
    try {
        const decoded = await decode(req.cookies.token);
        if (!decoded) {
            next(new ClientError(401, 'Token invalid.'));
            return;
        }

        if (decoded.exp <= Date.now() / 1000) {
            next(new ClientError(401, 'Token Expired'));
            return;
        }
        const now = Date.now();
        res.send({
            exp: `${decoded.exp}, ${new Date(decoded.exp * 1000).toUTCString()}`,
            currentTime: `${now}, ${new Date(now).toUTCString()}`,
            ms: `${decoded.exp * 1000 - now}`,
            s: `${(decoded.exp * 1000 - now) / 1000}`,
            mins: `${(new Date(decoded.exp * 1000) - new Date(now)) / 1000 / 60}`
        });
    } catch (error) {
        next(error);
    }
});

module.exports = { router, version: 1 };
