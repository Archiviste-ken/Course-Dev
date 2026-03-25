const express = require('express')
const authRouter = express.Router() // Create a new router object to handle authentication-related routes.
const authController = require("../controllers/auth.controller")
const multer = require("multer") // multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.
const upload = multer({storage: multer.memoryStorage()}) // Configure multer to store uploaded files in memory. This means that the files will not be saved to disk, but will be available as a buffer in the request object. This is useful for processing files directly in memory without needing to save them to the server's filesystem.

// routing is the process of defining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.). Each route can have one or more handler functions, which are executed when the route is matched. The handler functions can perform various tasks such as processing the request, interacting with databases, and sending responses back to the client.


/**
 * POST /api/auth/register
 */
authRouter.post("/register",upload.single("image"), authController.registerController)


/**
 * POST /api/auth/login
 */
authRouter.post("/login", authController.loginController)

module.exports = authRouter
