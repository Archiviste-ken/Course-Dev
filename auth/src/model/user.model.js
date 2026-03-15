const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    user: String
    email: {
        type: String,
        unique: [true, 'Email already exists']
    }
    password: String,
})

const userModel = mongoose.model("user",userSchema)



module.exports = userModel