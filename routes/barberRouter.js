const express = require("express");
const { addBarber, getBarber } = require("../controllers/barberController");
const route=express.Router();





route.get("/getBarber",getBarber)
route.post("/addBarber",addBarber)
// route.put("/:id",updateTeam)
// route.delete("/:id",deleteTeam)


module.exports=route