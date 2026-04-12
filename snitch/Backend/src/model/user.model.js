import momgoose from "mongoose";


const userSchema = new mongoose.Schema({

    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    contact: { type: String, required: true},
    fullname: { type: String, required: true},
    role: {
        type: String,
        enumL: [ "buyer", "seller"],
        default: "buyer"
    }


    })


    const userModel = mongoose.model("User", userSchema);

    export default userModel;