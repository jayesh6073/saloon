const Sequelize = require("sequelize")
const sequelize = require("../config/connection");
const owner = require("./owner");
const mysql = require('mysql2');
const saloon = sequelize.define('saloon', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    owner_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: owner,
            key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
        allowNull: false,
    },
    saloon_name: {
        type: Sequelize.DataTypes.STRING,
    },
    mobile_number: {
        type: Sequelize.DataTypes.STRING,
    }
},
    {
        freezeTableName: true,
        paranoid: true,

    }
)
saloon.sync()

module.exports = saloon;