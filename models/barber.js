const Sequelize = require("sequelize")
const sequelize = require("../config/connection");
const saloon = require("./saloon");
const mysql = require('mysql2');

const barber = sequelize.define('barber', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    saloon_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: saloon,
            key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
        allowNull: false,
    },
    first_name: {
        type: Sequelize.DataTypes.STRING,
    },
    last_name: {
        type: Sequelize.DataTypes.STRING,
    }
},
    {
        freezeTableName: true,
        paranoid: true,
    }
)

barber.sync()
module.exports = barber;