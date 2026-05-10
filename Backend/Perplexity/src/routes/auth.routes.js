import { Router } from "express";
import { registerValidator } from "../validators/auth.validator";

const authrouter = Router();

authrouter.post("/register", registerValidator, register);

export default authrouter;
