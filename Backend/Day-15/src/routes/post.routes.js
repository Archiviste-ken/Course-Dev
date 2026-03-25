const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer") // multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.
const upload = multer({storage: multer.memoryStorage()}) // Configure multer to store uploaded files in memory. This means that the files will not be saved to disk, but will be available as a buffer in the request object. This is useful for processing files directly in memory without needing to save them to the server's filesystem.


/**
 * POST /api/posts
 * req.body = { caption, image-file}
 */



postRouter.post("/", upload.single("image") ,postController.creatPostController)



module.exports = postRouter