const mongoose = require("mongoose")


async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connnected to DB");
        
    })
}



module.exports = connectDB