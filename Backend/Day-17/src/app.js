const express = require("express")
require("dotenv").config();
const cookieParser = require("cookie-parser")

const app = express()

const postRouter = require("./routes/post.routes")
const authRouter = require("./routes/auth.routes")

app.use(express.json())
app.use(cookieParser()); // ✅ MOVE THIS UP

app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)

module.exports = app