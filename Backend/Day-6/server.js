/* 
server ko start krna
and database se connect karna
*/



const app = require("./src/app");
const mongoose = require("mongoose")

function connectToDB(){

    mongoose.connect("mongodb+srv://gojosatoru6862_db_user:Z5n68iwcSQRiGfJo@cluster0.y8rhtxn.mongodb.net/Day-6")
    // mongoose.connect this method connects express server to the mongodb database.
//this uri connects mongoose to the database cluster and the specific database we want to use. It includes the username, password, and the name of the database we want to connect to.
}


app.listen(3000,()=>{
    console.log("server is running at port 3000")
})