import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    email: { type: String, required: true, unique: true},
    contact: { type: String, required: true},
    password: { type: String, required: true},
   
    fullname: { type: String, required: true},
    role: {
        type: String,
        enum: [ "buyer", "seller"],
        default: "buyer"
    }
    })

    userSchema.pre("save",async function() {  // pre save hook to hash the password before saving the user document to the database 

        if(!this.isModified("password")) return;

        const hash = await bcyrpt.hash(this.password, 10);
        this.password = hash;
    })

    userSchema.methods.comparePassword = async function(password) {  // method to compare the provided password with the hashed password stored in the database

        return await bcyrpt.compare(password, this.password);
    }


    const userModel = mongoose.model("User", userSchema);

    export default userModel;