const model = require("../models/model");
const {errorResponse, successResponse} = require('../middleware/responseHandler');

const addBarberRating = async (req, res) => {
    try {
        console.log(req.body);
        const data = await model.barberRating.create(req.body);
        res.status(200).json(successResponse(data)) 
    } catch (error) {
        res.json(errorResponse(error.message))
    }
}
const getBarberRating = async (req, res) => {
    try {
        const data = await model.barberRating.findAll({
            include: [{
                model: model.barber,
                include:[{
                    model:model.saloon
                }],
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

module.exports = {addBarberRating,getBarberRating}