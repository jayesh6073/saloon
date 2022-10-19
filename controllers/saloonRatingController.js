const model = require("../models/model");
const {errorResponse, successResponse} = require('../middleware/responseHandler');

const addSaloonRating = async (req, res) => {
    try {
        console.log(req.body);
        const data = await model.saloonRating.create(req.body);
        res.status(200).json(successResponse(data))  
    } catch (error) {
        res.json(errorResponse(error.message))
    }
}
const getSaloonRating = async (req, res) => {
    try {
        const data = await model.saloonRating.findAll({
            include: [{
                model: model.saloon
            },
            {
                model: model.user
            }]
        });
        res.status(200).json(successResponse(data)) 

    } catch (error) {
        res.json(errorResponse(error.message))
    }
}

module.exports = {addSaloonRating,getSaloonRating}