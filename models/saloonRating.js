const Sequelize = require("sequelize")
const sequelize = require("../config/connection");
const saloon = require("./saloon");
const user = require("./user");


const saloonRating = sequelize.define('saloonRating', {
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

saloonRating.sync()
module.exports = saloonRating;