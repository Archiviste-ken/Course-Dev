import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";



async function sendTokenResponse(user, res) {

    const token = jwt.sign({
        id: user._id,
    },config.JWT_SECRET, { expiresIn: "7d" })
        res.status(200).json({
            token,
            user: {
                id: user._id,
                email: user.email,
                contact: user.contact,
                fullName: user.fullName,
                role: user.role
            }
        })

    }


export const register = async (req, res) => {


    const { email, contact, password, fullName } = req.body;

    try{
        const existingUser = await userModel.findOne({
            $or: [
                {email},
                {contact}
            ]
        })


        if(existingUser) {
            return res.status(400).json({ message: "User with this email or contact number already exists" })
        }

        const newUser = new userModel({
            email,
            contact,
            password,
            fullName
        })  
        
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
        
}
}
