const express=require("express");
const { addSaloon, getSaloon } = require("../controllers/saloonController");
const route=express.Router();
// const { getTeam, getTeamAll, addTeam, updateTeam, deleteTeam } = require("../controller/teamController");




route.get("/getSaloon",getSaloon)
route.post("/addSaloon",addSaloon)
// route.put("/:id",updateTeam)
// route.delete("/:id",deleteTeam)


module.exports=route