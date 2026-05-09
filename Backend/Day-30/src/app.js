import express from "express";
import authRouter from "../src/routes/auth.routes.js";
import handleError from "./middleware/error.middleware.js"

const app = express();


/**
 * Middlewares
 */

app.use(express.json());
app.use(handleError())

/**
 * Routes
 */

app.use("/api/auth", authRouter);

export default app;
