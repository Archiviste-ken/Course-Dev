/**
 * server ko start krna
 * database se connect krna
 */
// require('dotenv').config()
// const app = require("./src/app")
// const connectToDB = require("./src/config/database")


// connectToDB()


// app.listen(3000, () => {
//     console.log("server is running on port 3000")
// })

require('dotenv').config()
const app = require("./src/app")
const connectDB = require("./src/config/database")


connectDB()




app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})