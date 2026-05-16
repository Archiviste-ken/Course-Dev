import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import chatRouter from "./routes/chat.routes.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

//Middleware
app.use(express.json());  // Parse JSON bodies, it is used to parse the incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
  }),
);

// Routes

app.use("/api/auth", authRouter);
app.use("/api/chat", chatRouter);

export default app;
