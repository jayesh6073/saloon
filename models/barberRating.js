const Sequelize = require("sequelize")
const sequelize = require("../config/connection");
const barber = require("./barber");
const user = require("./user");
const mysql = require('mysql2');

const barberRating = sequelize.define('barberRating', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    barber_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: barber,
            key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
        allowNull: false,
    },
    rating: {
        type: Sequelize.DataTypes.STRING,
    },
    user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: user,
            key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
        allowNull: false,
    }
},
    {
        freezeTableName: true,
        paranoid: true,
    }
)
barberRating.sync()

module.exports = barberRating;