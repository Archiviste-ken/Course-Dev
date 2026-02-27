/*
server ko create krna
server ko config krna
*/



const express = require("express")

const app = express()

app.use(express.json())

const notes = []

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.post('/notes',(req,res) =>{
    console.log(req.body);
    notes.push(req.body)
    // res.send("note created")

    res.status(201).json({
        message: "Note created successfully"
    })
    
})


app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.status(204).json({
        message: "Note deleted successfully"
    })
})


app.patch("/notes/:index", (req,res) =>{
    notes[req.params.index].description = req.body.description

    res.status(200).json({
        message: "Notes updated"
    })
})

module.exports = app