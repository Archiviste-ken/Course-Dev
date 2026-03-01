/*


server ko start krna
database se connect karna

*/


// const app = require("./src/app")
// const mongoose = require("mongoose")
// const connectDB = require("./config/database")





// connectDB()

// app.listen(3000,()=>{
//     console.log("server is now running on the port 3000");
    
// })



const app  = require("./src/app")
const connectDB = require("./config/database")

connectDB()


app.listen(3000,()=>{
    console.log("server is now running on the port 3000");
})