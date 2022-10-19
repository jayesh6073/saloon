require("dotenv").config();
const express=require("express");
const app=express();
require("./config/connection")


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/", require('./routes/ownerRouter'));
app.use("/", require('./routes/userRouter'));
app.use("/", require('./routes/barberRatingRouter'));
app.use("/", require('./routes/barberRouter'));
app.use("/", require('./routes/saloonRatingRouter'));
app.use("/", require('./routes/saloonRouter'));


const port=process.env.PORT

app.listen(port,()=>{
    console.log(`server is runing port no: http://localhost:${port}`);
})