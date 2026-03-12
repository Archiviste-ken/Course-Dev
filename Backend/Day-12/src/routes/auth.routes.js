const express = require("express")
const userModel = require("../models/user.models")
const jwt = require("jsonwebtoken")

const authRouter = express.Router()

authRouter.post("/register", async (req,res)=> {
    const {email,name,password} = req.body

        const isUserAlreadyExists = await userModel.findOne({email})
        
        if(isUserAlreadyExists){
            return res.status(400).json({
                message:"User already exists with this email address"
            })
        }
        const user = await userModel.create({
            email,password, name
        })

        res.status(201).json({
            message: "user register",user
        })
})

module.exports = authRouter