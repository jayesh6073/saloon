const model = require("../models/model");
const mysql =require('mysql2')
const jwt = require("jsonwebtoken");
const {errorResponse, successResponse} = require('../middleware/responseHandler');

const addUser = async (req, res) => {
    try {
        console.log(req.body);
        const data = await model.user.create(req.body);
        res.status(200).json(successResponse(data))   
    } catch (error) {
        res.json(errorResponse(error.message))
    }
}
const getUser = async (req, res) => {
    try {
        const data = await model.user.findAll({
            include: [{
                model: model.saloonRating
            },
            {
                model:model.barberRating,
            }
            ]
        });
        res.status(200).json(successResponse(data))   

    } catch (error) {
        res.json(errorResponse(error.message))
    }
}

const login = async (req, res) => {
    try {
        const data = await model.user.findOne({
            where:{
                email: req.body.email,
                }
            });
        if (!data) {
            return res.json({"messege":"your email or password is incorrect"})
        }
        
        if(data.password != req.body.password ){
            return res.json({"messege":"your email or password is incorrect"})
        }
    const user ={data}
    
    const jwtToken = jwt.sign(user,process.env.JWT_SECRET);
     res.json({messege:"welcome back",token:jwtToken});
    } catch (error) {
        res.json(errorResponse(error.message))
    }
}
const getLogin = async (req, res) => {
    try {
        let token = req.header('auth');
        let data = jwt.verify(token,process.env.JWT_SECRET);
        res.status(200).json(successResponse(data))   


    } catch (error) {
        res.json(errorResponse(error.message))
    }
}
module.exports = {addUser,getUser,login, getLogin}