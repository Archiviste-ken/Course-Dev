import Router from "express";
import { registerUser } from "../controllers/auth.controlller.js";


const authRouter = Router();

// express validator

authRouter.post("/register", registerUser);

export default authRouter;
