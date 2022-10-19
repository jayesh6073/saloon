const model = require("../models/model");
const {errorResponse, successResponse} = require('../middleware/responseHandler');

const addOwner = async (req, res) => {
    try {
        console.log(req.body);
        const data = await model.owner.create(req.body);
        res.status(200).json(successResponse(data))  
    } catch (error) {
        res.json(errorResponse(error.message))
    }
}
const getOwner = async (req, res) => {
    try {
        const data = await model.owner.findAll({
            include: [{
                model: model.saloon
            }]
        });
        res.status(200).json(successResponse(data)) 

    } catch (error) {
        res.json(errorResponse(error.message))
    }
}

module.exports = {addOwner, getOwner}