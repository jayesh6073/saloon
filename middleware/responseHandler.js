function successResponse(data){
    return{
        success:true,data
    }
}

function errorResponse(message){
    return {
        success:false,message
    }
}

module.exports={successResponse,errorResponse}