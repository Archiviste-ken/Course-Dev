// const express = require('express')

// const app = express()

// app.get('/', (req,res) =>{
//     res.send("Hello World")
// })

// app.listen(3000,()=> {
//     console.log("Server is running on port 3000")
// })


// const express = require('express')

// const app = express()

// app.get('/', (req,res) =>{
//     res.send("Hello World")
// })

// app.listen(3000,()=> {
//     console.log("Server is running on port 3000")
// })



// const express = require('express')

// const app = express()

// app.get('/',(req,res) => {
//     res.send("Hello World")
// })

// app.listen(3000)



//API - Application Programming Interface.

// API is a set of rules and protocols that enables different software programs to communicate and exchange data with each other.

// when two software applications wants to communicate with each other, they use API.

//REST API  - Representational State Transfer API.

// 2 main rules of Rest api, like how the communication will be happening.

// 1) protocol - HTTP/HTTPS ( only )
// 2) Method - GET, POST, PUT, DELETE, PATCH

// get - retrieves a resource or a list of resources, without modifying any data.

// post - creates a new resource. The request body contains the data for the new resource.

// PUT - updates a resource by replacing it with new data. Requires complete new representation in the request body.

// PATCH - updates a resouce by partially modifying it, requires only the modified fileds in the request body


// DELETE - DELETES A RESOURCE.


// const express = require("express")

// const app = express()




// app.listen(3000,()=>
// console.log("Server is running on port 3000");
// )



const express = require("express")

const app = express()


app.use(express.json())

const notes = []

 app.post('/notes',(req, res) => {

    console.log(req.body);
    
    notes.push(req.body)

    res.send("note created")
  
  })


  app.get('/notes',(req,res)=>
{
    res.send(notes)
})
  

//   app.get("/notes",(res,req) =>
// {
//     res.send
// })



app.listen(3000,()=>{
console.log("Server is running on port 3000");
})







// the data which is used to communicate by the frontend and backend is known as JSON.

// the data transferred is in the JSON format

// why we are using postman?
// because postman gives many tools, so that we can create API easily, we can develop API by browser but it is not very efficient and hard, postman makes it comparatively easy.




const express = require("express")

const app = express()


const notes = []


app.post('/notes',(req,res) =>{

    console.log(req.body);


    notes.push(req.body)

    res.send("notes created")
    
    


})