const mongoose = require("mongoose")

const postSchema = new mongoose.schema({
    caption:{
        type: String,
        default: ""
    },

    imgUrl:{
        type: String,
        required: [ true, " imgUrl is require for creating an post"]
    }
})




const postModel = mongoose.model("posts", postSchema)



module.exports = postModel