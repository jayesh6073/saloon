const express=require("express");
const { addUser, getUser, login, getLogin } = require("../controllers/userController");
const route=express.Router();
// const { getTeam, getTeamAll, addTeam, updateTeam, deleteTeam } = require("../controller/teamController");





route.get("/getUser",getUser)
route.get("/getLogin",getLogin)
route.post("/addUser",addUser)
route.post("/login",login)
// route.put("/:id",updateTeam)
// route.delete("/:id",deleteTeam)


module.exports=route