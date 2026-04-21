const app = require("./src/app");
const connectDB = require("./src/config/db");

require('dotenv').config()

connectDB()


app.listen(3000,(req,res)=> {
    console.log("Sever is running on the port 3000");
    
})

