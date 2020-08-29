const { DB } = require('../database/database');
const { DataTypes } = require('sequelize');

const securityQuestion = DB.define('securityQuestion', {
    question: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
module.exports = securityQuestion;
