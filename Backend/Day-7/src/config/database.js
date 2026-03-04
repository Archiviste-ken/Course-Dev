// const mongoose = require("mongoose")


// function connectDB(){
//     mongoose.connect("mongodb+srv://gojosatoru6862_db_user:Z5n68iwcSQRiGfJo@cluster0.y8rhtxn.mongodb.net/Day-7").then(()=>{
//         console.log("connected to the database successfully");
//     })
// }


// module.exports = connectDB


// const mongoose = require("mongoose")


// function connectDB(){
//     mongoose.connect("mongodb+srv://gojosatoru6862_db_user:Z5n68iwcSQRiGfJo@cluster0.y8rhtxn.mongodb.net//Day-7").then(()=>{
//         console.log("connected to the database successfully");
//     })
// }


// module.exports = connectDB



// const mongoose = require("mongoose")



// function connectDB(){
//     mongoose.connect("mongodb+srv://gojosatoru6862_db_user:Z5n68iwcSQRiGfJo@cluster0.y8rhtxn.mongodb.net/Day-7").then(()=>{
//         console.log("connected successfully");
        
//     })
// }


// module.exports = connectDB




const mongoose = require("mongoose")



function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to DB")
        })
}

module.exports = connectToDB