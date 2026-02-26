// server ko create krna
// server ko config krna

// config mtlb like middlewares ka use jaisa humne express ke liye use kiya thha  app.use(express.json()



// const express = require("express")

// const app = express()

// app.get('/',(req,res) => {
//     res.send(notes)
// })


// app.listen(3000)

// SERVER ko config karna = using middlewares like for example in Day-3 app.use(express.json()





const express = require("express")

const app = express() // server create hojata hai

app.use(express.json())

const notes = []

app.get('/notes',(req,res) =>{
    // res.send("Hello World")
    res.send(notes)
})

// POST /notes
app.post('/notes',(req,res) =>{
    console.log(req.body)
    notes.push(req.body)
    res.send("note created")
    
})


app.delete('/note/:index')



module.exports = app