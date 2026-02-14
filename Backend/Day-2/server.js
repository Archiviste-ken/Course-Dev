const express = require("express")

const app = express()  // server instance create krna

app.get('/kaneki',(req,res) => {
    res.send("tank")
})

app.listen(3000)  // server start krna