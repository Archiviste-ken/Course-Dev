import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
    

})