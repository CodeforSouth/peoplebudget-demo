/**
 * @module database
 */

const Seq = require('sequelize');
const { check } = require('prettier');

const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
};

const dbEnv = () => {
    switch (process.env.NODE_ENV) {
        case 'test':
            return `${process.env.DB}_test`;
        case 'dev':
            return `${process.env.DB}`;
        default:
            return `${process.env.DB}`;
    }
};

const DB = new Seq(dbEnv(), process.env.DBUSER, process.env.DBPW, {
    host: process.env.DBHOST,
    dialect: 'mysql',
    pool: pool
});

// connection test
(async () => {
    try {
        await DB.authenticate();
    } catch (error) {
        console.log(error);
    }
})();

/**
 * Populate the database on start up
 * @name populateDatabase
 * @memberof module:database
 * @async
 * @function
 * @return {null}
 */
const populateAuthLevels = async () => {
    try {
        const authLevels = require('../models/authLevels');
        const authLevelsDetails = process.env.AUTHLEVELS.split('.').map((levels) => {
            const [level, description] = levels.split(',');
            return { level, description };
        });
        await authLevels.destroy({
            where: {},
            truncate: true
        });
        await authLevels.bulkCreate(authLevelsDetails);
        return authLevelsDetails;
    } catch (error) {
        console.error(error);
    }
};

/**
 * Will migrate all tables or a single table.
 * @name migrate
 * @memberof module:database
 * @async
 * @function
 * @param {String} table - database table name
 * @return {null}
 */
const migrate = async (table) => {
    const models = require('../models/index');
    if (table && typeof table === 'String') {
        await models[table].sync({ alter: true });
    } else {
        const deffered = [];
        for (const model in models) {
            if (models.hasOwnProperty(model)) {
                try {
                    await models[model].sync({ alter: true });
                } catch (e) {
                    deffered.push(models[model]);
                }
            }
        }
        console.warn('Deffered tables:', deffered);
        if (deffered.length > 1) {
            for (const model in deffered) {
                if (models.hasOwnProperty(model)) {
                    try {
                        await models[model].sync({ alter: true });
                        deffered.pop(model);
                    } catch (e) {
                        deffered.push(models[model]);
                    }
                }
            }
        }
    }
};

/**
 * WIll drop all tables or a single table.
 * @name drop
 * @memberof module:database
 * @async
 * @function
 * @param {String} table - database table name
 * @return {null}
 */
const drop = async (table) => {
    const models = require('../models/index');
    if (table && typeof table === 'String') {
        await models[table].drop();
    } else {
        const deffered = [];
        for (const model in models) {
            if (models.hasOwnProperty(model)) {
                try {
                    await models[model].drop();
                } catch (e) {
                    deffered.push(models[model]);
                }
            }
        }
        console.warn('Deffered tables:', deffered);
        if (deffered.length > 1) {
            for (const model in deffered) {
                if (models.hasOwnProperty(model)) {
                    try {
                        await models[model].drop();
                        deffered.pop(model);
                    } catch (e) {
                        deffered.push(models[model]);
                    }
                }
            }
        }
    }
};

module.exports = { DB, migrate, drop, populateAuthLevels };
