/* 
server ko create krna
server ko configure krna
*/

// const express = require("express")
// const app = express()


// module.exports = app


const express = require("express")
const noteModel = require("./models/notes.model")

const notes = []

const app = express()

app.use(express.json()) 

/** 
 post - notes
 req.body - {title,description}
*/


// app.post("/notes", async (req,res)=>{
//     const{title,description} = req.body

//    const note = await noteModel.create({        // creates a note and saves to the server
//         title,description
//     })


//     res.status(201).json({
//         message: "Note created successfully",
//         note
//     })

// })

app.post("/notes",async (req,res)=>{
    const{title,description} = req.body


    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message: "Note createed successfully",
        note
    })

})


module.exports = app