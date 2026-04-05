const express = require('express')
const authRouter = express.Router() // Create a new router object to handle authentication-related routes.
const authController = require("../controllers/auth.controller")
const { identifyUser } = require("../middlewares/auth.middleware");


// routing is the process of defining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.). Each route can have one or more handler functions, which are executed when the route is matched. The handler functions can perform various tasks such as processing the request, interacting with databases, and sending responses back to the client.


/**
 * POST /api/auth/register
 */
authRouter.post("/register", authController.registerController)


/**
 * POST /api/auth/login
 */
authRouter.post("/login", authController.loginController)


/**
 * @route GET /api/auth/get-me
 * @desc Get the authenticated user's information
 * @access Private (requires authentication)
 */

authRouter.get("/get-me", identifyUser, authController.getMeController)


module.exports = authRouter
