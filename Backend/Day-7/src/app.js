/* 
server ko create krna
server ko configure krna
*/

// const express = require("express")
// const app = express()


// module.exports = app


const express = require("express")

const notes = []

const app = express()

/** 
 post - notes
 req.body - {title,description}
*/


app.post("/notes",(req,res)=>{
    console.log(req.boy);
    notes.push(req.push)
    
})


module.exports = app