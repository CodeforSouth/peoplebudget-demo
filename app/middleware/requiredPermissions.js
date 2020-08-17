/**
 * @module permissions
 */
const { decode } = require('../helpers/jwt');
const { ClientError } = require('../helpers/error');

/**
 *  this middleware Can be used to set permissions for end points
 * @name checkPermissions
 * @async
 * @function
 * @memberof module:permissions
 * @param {Function} req
 * @param {Function} res
 * @param {Function} next
 */
const checkPermissions = async (req, res, next) => {
    // console.log('Auth: ', process.AUTHLEVELS, req.cookies.token);
    console.log(req.url);
    try {
        const decoded = await decode(req.cookies.token);
        console.log(decoded);
        next();
    } catch (error) {
        next(new ClientError(401, 'Token Expired!'));
    }
    // try {
    //     const decoded = await decode(req.cookies.token);
    //     if (decoded && decoded.role === 'admin') next();
    //     else res.status(403).send({ response: 'Access denied!' });
    // } catch (err) {
    //     next(new ClientError(401, 'Token Expired!'));
    // }
};

module.exports = { checkPermissions };
