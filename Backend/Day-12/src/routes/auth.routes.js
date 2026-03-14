const express = require("express")
const userModel = require("../models/user.models")
const jwt = require("jsonwebtoken")

const authRouter = express.Router() // this is the router for the authentication related routes, we will use this router in our app.js file and prefix it with /api/auth, so all the routes defined in this file will be prefixed with /api/auth.

// if we want to create api routes in other files other than app.js, we need to create a router for that file and then use that router in app.js file, this way we can keep our code organized and modular.


/**
 * /api/route/register
 * 
 */
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

        const token = jwt.sign({
            id:user._id,
            email: user.email
        },
        process.env.JWT_SECRET
    )
        res.status(201).json({
            message: "user register",user, token
        })
})

module.exports = authRouter