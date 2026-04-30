const app = require("./src/app")
const connectDB = require("./config/db")

require("dotenv").config()


connectDB()

app.listen(3000,(req,res) => {

    console.log("Server is now running on the port 3000");
    
})