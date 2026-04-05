const express = require("express")
require("dotenv").config();
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(cors({
  origin: "http://localhost:5173", // your frontend
  credentials: true
}))
app.use(express.json())
app.use(cookieParser()); // ✅ MOVE THIS UP


/* require routes */
const postRouter = require("./routes/post.routes")
const authRouter = require("./routes/auth.routes")
const userRouter = require("./routes/user.routes")



/* using routes */
app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
app.use("/api/users", userRouter)



module.exports = app