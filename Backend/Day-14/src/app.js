const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
app.use(express.json())
authRouter = require("./routes/auth.routes")

app.use("/api/auth", authRouter)


app.use(cookieParser())

module.exports = app