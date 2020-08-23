const { DB } = require('../database/database');
const { DataTypes } = require('sequelize');

const contributor = DB.define('contributor', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = contributor;
