const app = require("./src/app.js")
const connectDB = require("./src/config/database.js")
require('dotenv').config()


connectDB()

app.listen(3000, ()=>{
    console.log("Server is now running on the port 3000")
})