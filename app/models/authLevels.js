const { DB } = require('../database/database');
const { DataTypes } = require('sequelize');

const authLevel = DB.define('AuthLevel', {
    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(150),
        allowNull: true
    }
});
module.exports = authLevel;
