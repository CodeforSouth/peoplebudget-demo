/**
 * @module validator
 */

const validator = require('validator');
const { ClientError } = require('../helpers/error');

/**
 * This will validate an object's keys
 * params can use keys:
 *  - min: specifies the minimum length of the input
 *  - max: specifies the maximum length of the input
 *  - type: (alpha, alphanumeric, numeric, email, password)
 *  - nullable: specifies whether the field can be empty
 *  - array: specifies whether the field can be a list
 * @name customValidator
 * @function
 * @memberof module:validator
 * @param {Object} body - Object with keys that need to be validated
 * @param {Object} params - An object that represents required keys and validation rules
 * @return {Object|Boolean} returns Error object | returns true if is valid
 */
const customValidator = (body, params) => {
    for (const key in params) {
        if (body.hasOwnProperty(key)) {
            // check length
            if (params[key] && (params[key].min || params[key].max)) {
                const userInput =
                    typeof body[key] === 'number' ? body[key].toString().length : body[key].length;
                if (userInput < params[key].min) {
                    console.log('should throw error');
                    return new ClientError(
                        400,
                        `The '${key}' value is too short, must be greater than ${
                            params[key].min - 1
                        } characters.`
                    );
                }
                if (userInput > params[key].max) {
                    return new ClientError(
                        400,
                        `The '${key}' value is too long, must be less than ${
                            params[key].max + 1
                        } characters.`
                    );
                }
            }
            // check types
            if (params[key] && params[key].type) {
                if (
                    typeof body[key] === 'object' &&
                    !params[key].array &&
                    !Array.isArray(body[key])
                ) {
                    return new ClientError(
                        400,
                        `The '${key}' can not be type '${typeof body[key]}'.`
                    );
                } 
                switch (params[key].type) {
                    case 'alphanumeric':
                        if (!validator.isAlphanumeric(body[key])) {
                            return new ClientError(
                                400,
                                `The '${key}' must be should only contain characters or letters.`
                            );
                        }
                    case 'alpha':
                        if (!validator.isAlpha(body[key].replace(/-|'/g, ''))) {
                            return new ClientError(
                                400,
                                `The '${key}' must contain charactes only.`
                            );
                        }
                        break;
                    case 'numeric':
                        if (typeof body[key] !== 'number' && !validator.isNumeric(body[key])) {
                            return new ClientError(
                                400,
                                `The '${key}' must be contain numbers only.`
                            );
                        }
                        break;
                    case 'email':
                        if (!validator.isEmail(body[key])) {
                            return new ClientError(400, `The '${key}' must be in email format.`);
                        }
                        break;
                    case 'password':
                        console.log(body[key], process.env.PASSWORDRULE);
                        if (!validator.matches(body[key], process.env.PASSWORDRULE)) {
                            return new ClientError(
                                400,
                                `The '${key}' ${process.env.PASSWORDRULEMESSAGE}`
                            );
                        }
                        break;
                    default:
                        break;
                }
            }
            // check if nullable
            if (params[key] && !params[key].nullable) {
                if (!params[key].nullable && !body[key]) {
                    return new ClientError(400, `The '${key}' can not be null or empty`);
                }
            }
        } else {
            return new ClientError(400, `Missing paramater '${key}' .`);
        }
    }
    return false;
};

module.exports = { customValidator };
