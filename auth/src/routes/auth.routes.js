const express = require("express")
const userModel = require("../model/user.model")
const authRouter = express.Router();
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

/**
 * POST /api/auth/register
 */

authRouter.post("/register",async(req,res)=>{
    const { name, email, password } = req.body

    const isUserExists = await userModel.findOne({email})

    if(isUserExists){
        return res.status(409).json({
            message: " User Already exists"
        })
    }

    const user = await userModel.create({
        name,
        email,
        password: crypto.createHash("sha256").update(password).digest("hex")
    })


    const token = jwt.sign({
        id: user._id,
    },
    process.env.JWT_SECRET, { expiresIn: "1h"})

    res.cookie("token",token)

    res.status(201).json({
        message: "User Registered Successfully",
        user: {
            name: user.name,
            email: user.email
        }
    })

    
})


// authRouter.post("/login")

module.exports = authRouter;

