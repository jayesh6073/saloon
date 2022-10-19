const model= require("../models/model");
const {errorResponse, successResponse} = require('../middleware/responseHandler');

const addBarber = async (req, res) => {
    try {
        console.log(req.body);
        const data = await model.barber.create(req.body);
        res.status(200).json(successResponse(data)) 
    } catch (error) {
        res.json(errorResponse(error.message))
    }
}
const getBarber = async (req, res) => {
    try {
        const data = await model.barber.findAll({
            include: [{
                model: model.saloon
            }]
        });
        res.status(200).json(successResponse(data)) 

    } catch (error) {
        res.json(errorResponse(error.message))
    }
}

module.exports = {addBarber,getBarber}