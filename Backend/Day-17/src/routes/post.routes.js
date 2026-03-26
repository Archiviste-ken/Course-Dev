const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer") // multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.
const upload = multer({storage: multer.memoryStorage()}) // Configure multer to store uploaded files in memory. This means that the files will not be saved to disk, but will be available as a buffer in the request object. This is useful for processing files directly in memory without needing to save them to the server's filesystem.
const { identifyUser } = require("../middlewares/auth.middleware");

/**
 * POST /api/posts
 * req.body = { caption, image-file}
 */



postRouter.post("/", identifyUser, upload.single("image"), postController.createPostController)



/**
 * GET /api/posts/ [protected]
 */

postRouter.get("/", identifyUser,    postController.getPostController)


/**
 * GET /api/posts/details/:postid
 * - return an detail about specific post with the id, also check whethr the post belongs to the user that request come from or not
 */


postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController)



module.exports = postRouter