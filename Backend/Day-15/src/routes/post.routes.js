const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")


/**
 * POST /api/posts
 * req.body = { caption, image-file}
 */



postRouter.post("/",postController.creatPostController)



module.exports = postRouter