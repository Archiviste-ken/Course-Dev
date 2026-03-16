const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already exists"],
        required: [true, "Username is required"]
    },

    email: {
        type: String,
        unique: [ true, " Email already exists"],
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]    
},
    bio: String,
    followers: String,
    profile_image: {
        type: String,
        default: "https://i.ytimg.com/vi/JjrczzikEo4/mqdefault.jpg"
    },
})


const userModel = mongoose.model("users", userSchema )



module.exports = userModel2