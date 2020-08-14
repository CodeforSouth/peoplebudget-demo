const { DB } = require('../database/database');
const { DataTypes } = require('sequelize');

const post = DB.define('post', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
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
    datePosted: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    comments: {
        types: DataTypes.JSON,
        allowNull: false
    },
    coords: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});
module.exports = post;
