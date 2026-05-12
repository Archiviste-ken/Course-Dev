import { Router } from "express";
import { registerValidator, loginValidator } from "../validators/auth.validator.js";
import { registerUser, verifyEmail, loginUser } from "../controllers/auth.controller.js";

const authrouter = Router();

authrouter.post("/register", registerValidator, registerUser);

authrouter.get("/verify-email", verifyEmail);

authrouter.post("/login", loginValidator, loginUser);

export default authrouter;
