const app = require("./src/app.js")
require("dotenv").config()

const connectDB = require("./src/config/db.js")


connectDB()


app.listen(3000,(req,res)=>{

   console.log("Server is now running on the port 3000");
   

})