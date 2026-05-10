import { Router } from "express";
import { registerValidator } from "../validators/auth.validator.js";
import authController from "../controllers/auth.controller.js"

const authrouter = Router();

authrouter.post("/register", registerValidator, authController.registerUser);

export default authrouter;
