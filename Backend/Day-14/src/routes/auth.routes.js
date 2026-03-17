const express = require('express')
const crypto = require("crypto")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")
const userModel = require("../model/user.model")


authRouter.post("/register", async (req, res)=>{
    console.log(req.body);
const {username, email, password , bio , profile_image} = req.body
// const isUserExistsByEmail =  await userModel.findOne({email})


//     if(isUserExistsByEmail){
//     return res.status(400).json({
//         message: "Email already exists"
//                 })}

//         const isUserExistsByUsername = await userModel.findOne({username})

//         if(isUserExistsByUsername){
//             return res.status(400).json({
//                 message: "Username already exists"
//             })
//         }





const isUserAlreadyExists = await userModel.findOne({
    $or: [
        {email},
        {username}
    ]
})
    if(isUserAlreadyExists){
        return res.status(400)
        .json({
            // message: "User already exists" isUserAlreadyExists.email ? "Email already exists" : "Username already exists"
            
           message: "User already exists" + (isUserAlreadyExists.email) == email ? "Email already exists" : "Username already exists"
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex")

    const user = await userModel.create({
        username,
        email,
        bio,
        profile_image,
        password: hash
    })


    
        /**
         * user ka data hona chaiye
         * dat unique hona chaiye
         */
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET,{expiresIn:"1d"}
    )

        res.cookie("token", token)

        res.status(201).json({
            message: "User registered successfully",
            user: {
                username: user.username,
                email: user.email,
                bio: user.bio,
                profileImage: user.profile_image
            }})
})




module.exports = authRouter
