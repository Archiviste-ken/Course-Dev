const mongoose = require("mongoose")


async function connectDB(){
    console.log("MONGO_URI:", process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connnected to DB");
        
    })
}



module.exports = connectDB