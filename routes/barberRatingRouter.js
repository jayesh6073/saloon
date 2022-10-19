const express=require("express");
const { addBarberRating, getBarberRating } = require("../controllers/barberRatingController");
const route=express.Router();




route.get("/getBarberRating",getBarberRating)
route.post("/addBarberRating",addBarberRating)
// route.put("/:id",updateTeam)
// route.delete("/:id",deleteTeam)


module.exports=route