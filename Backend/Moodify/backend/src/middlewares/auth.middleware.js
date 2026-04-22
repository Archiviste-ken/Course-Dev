const userModel = require("../models/user.models")
const jwt = require("jsonwebtokenjs")


async function identifyUser(req, res, next){

    const token = req.cookies.token;

    if(!token){

        return res.status(401).json({
            message: "Token not provided"
        })

    }


   try{

    const decoded =   jwt.verify(  // if token is right and not expired

        token,
        process.env.JWT_SECRET, // checks if token is expire or not!!!
    )

        req.user = decoded
        next();

   }catch(err){

        return res.status(401).json({

    message: "Invalid or expired token"

        })

   }    


}

module.exports = {identifyUser}