const mongoose = require("mongoose");
const { post } = require("../routes/post.routes");

const likeSchema = new mongoose.Schema({
    post: {
       
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: [ true, "post id is required for creating a like"]
    },
    user: {
       
        type: String,
        ref: "users",  
        required: [true, "username is required for creating a like"]
    }
}, { timestamps: true }
)


likeSchema.index({ post: 1, user: 1 }, { unique: true }) // This creates a compound index on the "post" and "user" fields. The unique: true option ensures that each combination of post and user can only occur once in the collection. This means that a user can only like a specific post once, preventing duplicate likes from the same user on the same post.

const likeModel = mongoose.model("likes", likeSchema)

module.exports = likeModel