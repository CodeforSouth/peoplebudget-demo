const { DB } = require('../database/database');
const { DataTypes } = require('sequelize');

const profilepicture = DB.define('profilepicture', {
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = profilepicture;
