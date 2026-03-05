// const mongoose = require("mongoose")


// function connectToDB(){
//     mongoose.connect(process.env.MONGO_URI).then(()=>{
//         console.log("Connected to DB");
        
//     })
// }


// module.exports = connectToDB


const mongoose = require("mongoose")

function connectDB(){
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connect to DB");
    
})
}

module.exports = connectDB