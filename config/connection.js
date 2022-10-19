require("dotenv").config();
const sequelize = require('sequelize');
const Sequelize = new sequelize (process.env.DB, process.env.USER, process.env.PASSWORD,{
    dialect:'mysql'
 
});
Sequelize.authenticate().
then(() =>{
    console.log("database is connected");
}).catch(() => {
    console.log("database is not connected");
});
module.exports =Sequelize;