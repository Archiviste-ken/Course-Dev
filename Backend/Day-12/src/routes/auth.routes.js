const express = require("express")
const userModel = require(../models/user.model)

const authRoutes = express.Router()

authRouter.post("/register",async (req,res)=>{
    const {email,name,password} = req.body
        const user = await userModel.create({
            email,password, name
        })

        res.status(201).json({
            message: "user register".user
        })
})

module.exports = authRouter