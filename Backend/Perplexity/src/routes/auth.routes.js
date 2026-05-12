import { Router } from "express";
import { registerValidator } from "../validators/auth.validator.js";
import { registerUser, verifyEmail } from "../controllers/auth.controller.js";

const authrouter = Router();

authrouter.post("/register", registerValidator, registerUser);

authrouter.get("/verify-email", verifyEmail);

export default authrouter;
