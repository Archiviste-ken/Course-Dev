const userModel = require("../models/user.models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


async function registerUser(req,res){

    const  {username,email, password } = req.body

    const isAlreadyRegistered = await userModel.findOne({

        $or: [
            {email},
            {username}
        ]
    })

    if(isAlreadyRegistered) {

        return res.status(400).json({
            message: "User with the same email or username already exists"
        })
    }


    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hash
    })


    const token = jwt.sign({  //similar to mongoose.connect(process.env.MONGO_URI), but now we just have jwt.sign({},process.env.JWT_SECRET)
        id: user._id,
        username: user.username
    
    }, process.env.JWT_SECRET, {
        expiresIn: "3d"
    });

    //scope doubt how the hell i am accessing the id declared inside const token in return? scope issues check krna



        res.cookie("token", token)

        return res.status(201).json({
            message: "User is registered Successfully",
            user: {

                id: user._id,
                username: user.username,
                email: user.email,

            }

        })
}



async function loginUser(req,res){

    const {email, password, username} = req.body;


    const user = await userModel.findOne({

        $or: [
            { email },
            { username }
        ]
    })


    if(!user){

        return res.status(400).json({
            message: "Invalid credentials"
        })

    }


    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {

        return res.status(400).json({
            message: "Invalid credentials"
        })
    }
    

    const token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET,
    {
        expiresIn: "3d"
    },
    )


    res.cookies("token",token)


    return res.status(200).json({
        message: "User Logged in Successfully",

        user: {
            id: user.id,
            username: user.username,
            email: user.email,
        }
    })
}

module.exports = {
    registerUser,
    loginUser
}