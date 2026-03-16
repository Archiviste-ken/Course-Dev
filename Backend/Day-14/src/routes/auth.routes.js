const express = require('express')

const authRouter = express.Router()


authRouter.post("/register", async (req, res)=>{
            const {username, email, password} = req.body
            const isUserExistsByEmail =  await userModel.findOne({email})


    if(isUserExistsByEmail){
    return res.status(400).json({
        message: "Email already exists"
                })
            
            
}