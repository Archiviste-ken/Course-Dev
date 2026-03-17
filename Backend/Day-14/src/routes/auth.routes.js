const express = require('express')

const authRouter = express.Router()


authRouter.post("/register", async (req, res)=>{
            const {username, email, password , bio , profileImage} = req.body
            const isUserExistsByEmail =  await userModel.findOne({email})


    if(isUserExistsByEmail){
    return res.status(400).json({
        message: "Email already exists"
                })}

        const isUserExistsByUsername = await userModel.findOne({username})

        if(isUserExistsByUsername){
            return res.status(400).json({
                message: "Username already exists"
            })
        }

})

module.exports = authRouter