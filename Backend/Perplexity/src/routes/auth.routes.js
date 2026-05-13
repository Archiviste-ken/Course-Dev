import { Router } from "express";
import {
  registerValidator,
  loginValidator,
} from "../validators/auth.validator.js";
import {
  registerUser,
  verifyEmail,
  loginUser,
  getMe,
} from "../controllers/auth.controller.js";

import { authUser } from "../middleware/auth.middleware.js";

const authrouter = Router();

/**
 *  @route POST /api/auth/register
 *  @desc Register a new user
 *  @access Public
 * @body { username, email, password }
 */

authrouter.post("/register", registerValidator, registerUser);

/**
 * @route GET /api/auth/verify-email?token=...
 * @desc Verify user's email address
 * @access Public
 * @query { token }
 */
authrouter.get("/verify-email", verifyEmail);

/**
 * @route POST /api/auth/login
 * @desc Login user and return JWT token
 * @access Public
 * @body { email, password }
 */
authrouter.post("/login", loginValidator, loginUser);

/**
 * @route GET /api/auth/get-me
 * @desc Get current logged in user's info
 * @access Private
 */

authrouter.get("/get-me", authUser);

export default authrouter;
