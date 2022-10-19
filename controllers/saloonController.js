const model = require("../models/model");
const {errorResponse, successResponse} = require('../middleware/responseHandler');

const addSaloon = async (req, res) => {
    try {
        console.log(req.body);
        const data = await model.saloon.create(req.body);
        res.status(200).json(successResponse(data)) 
    } catch (error) {
        res.json(errorResponse(error.message))
    }
}
const getSaloon = async (req, res) => {
    try {
        const data = await model.saloon.findAll({
            include: [{
                model: model.barber
            } ,
            {
                model: model.owner
            }
        ]
        });
        res.status(200).json(successResponse(data))  

    } catch (error) {
        res.json(errorResponse(error.message))
    }
}

module.exports = {addSaloon,getSaloon}