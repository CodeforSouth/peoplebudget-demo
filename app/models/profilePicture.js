const { DB } = require('../database/database');
const { DataTypes } = require('sequelize');

const profilePicture = DB.define('profilepicture', {
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = profilePicture;
