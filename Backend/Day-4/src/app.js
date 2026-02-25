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


const notes = [
    
//     {

//      title: "test title 1",
//      description: "test description 1"

// }

]

app.get('/',(req,res) =>{
    res.send("Hello World")
})

// POST /notes
app.post('/notes',(req,res) =>{
    console.log(req.body);

    res.send("note created")
    
})



module.exports = app