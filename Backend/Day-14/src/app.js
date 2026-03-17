const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
authRouter = require("./routes/auth.routes")

app.use("/api/auth", authRouter)
app.use(express.json())

app.use(cookieParser())

module.exports = app