const { DB } = require('../database/database');
const { DataTypes } = require('sequelize');

const user = require('./user');
const post = require('./post');

const comment = DB.define('Comment', {
    body: {
        type: DataTypes.STRING(150),
        allowNull: false
    }
});

user.hasMany(comment);
post.hasMany(comment);
module.exports = comment;
