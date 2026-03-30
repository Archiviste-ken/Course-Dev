const mongoose = require("mongoose");


const LikeSchema = new mongoose.Schema({

    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: [ true, "Post is required"]   
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [ true, "User is required"]   
    },

}, {
    timestamps: true
})

LikeSchema.index({ post: 1, user: 1 }, { unique: true })

const LikeModel = mongoose.model("likes", LikeSchema)

module.exports = LikeModel
