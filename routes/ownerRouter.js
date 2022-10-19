const express=require("express");
const { addOwner, getOwner } = require("../controllers/ownerController");
const route=express.Router();

// const validator = require("../validation/validation")




route.post("/addOwner",addOwner)
route.get("/getOwner",getOwner)

// route.put("/:id",updatePlayer)
// route.delete("/:id",deletePlayer)


module.exports=route