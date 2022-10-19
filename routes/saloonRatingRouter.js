const express=require("express");
const { addSaloonRating, getSaloonRating } = require("../controllers/saloonRatingController");
const route=express.Router();




route.get("/getSaloonRating",getSaloonRating)
route.post("/addSaloonRating",addSaloonRating)
// route.put("/:id",updateTeam)
// route.delete("/:id",deleteTeam)


module.exports=route