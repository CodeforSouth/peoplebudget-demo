const { DB } = require('../database/database');
const { DataTypes } = require('sequelize');
const user = require('./user');

const post = DB.define('post', {
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    tags: {
        type: DataTypes.JSON,
        allowNull: false
    },
    votes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    coords: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

user.hasMany(post);
module.exports = post;
