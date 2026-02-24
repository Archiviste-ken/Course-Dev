// const express = require("express")// loads the express.js library into your file.

// const app = express()  // server instance create krna

// app.get('/kaneki',(req,res) => {
//     res.send("tank")
// })

// app.get('/dashboard',(req,res) => {
//     res.send("Welcome to the dashboard")
// })

// app.listen(3000)// server start krna

// const express = require("express") // express.js library ko load krna

// const app = express()// express application ka instancer create krna

// app.get('/kaizen',(req,res) => {
//     res.send("Welcome to kaizen")
// })

// app.listen(3000)




const express = require("express")

const app = express()

app.get('/',(req,res) =>{
    res.send("Welcome to kaizen")
})


app.listen(3000)



