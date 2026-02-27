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
    res.send("note created")
    
})










module.exports = app