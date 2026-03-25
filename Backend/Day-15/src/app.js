const express = require("express")
require("dotenv").config();
const cookieParser = require("cookie-parser")
const app = express()
const postRouter = require("./routes/post.routes")
app.use(express.json())
authRouter = require("./routes/auth.routes")

app.use("/api/auth", authRouter)
app.use("/api/posts",postRouter)


app.use(cookieParser())

module.exports = app