const Sequelize = require("sequelize")
const sequelize = require("../config/connection")
const mysql = require('mysql2');
const user = sequelize.define("user", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    first_name: {
      type: Sequelize.DataTypes.STRING,

    },
    last_name: {
      type: Sequelize.DataTypes.STRING,

    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    mobile_number: {
      type: Sequelize.DataTypes.INTEGER,
    },
    role: {
        type: Sequelize.DataTypes.STRING,
      }
  },
  {
    freezeTableName: true,
    paranoid: true,
  });
  user.sync()

module.exports = user;