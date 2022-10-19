const responseHandler=require("./responseHandler")

const errorHandler =(error,req,res,next)=>{
    const status = error.statusCode ||500
    const message=error.message
    return res.status(status).json(responseHandler.errorResponse(message))
}

module.exports =errorHandler