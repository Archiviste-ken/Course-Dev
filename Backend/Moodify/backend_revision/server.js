const app = require("./src/app")
const connectDB = require("./src/config/db")

require("dotenv").config() //middleware to read the .env file


connectDB()

app.listen(3000,(req,res)=>{

    console.log("Server is now running on the Port 3000");
    
})