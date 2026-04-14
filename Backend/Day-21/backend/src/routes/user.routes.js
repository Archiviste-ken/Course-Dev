     const express = require("express")
const userController = require("../controllers/user.controller")
const { identifyUser } = require("../middlewares/auth.middleware")

const userRouter = express.Router()



/**
 * @route POST /api/users/follow/:userid
 * @desc Follow a user
 * @access Private
 */
userRouter.post("/follow/:username",identifyUser, userController.followUserContoller)


/** * @route DELETE /api/users/unfollow/:userid
 * @desc Unfollow a user
 * @access Private
 */     

userRouter.delete("/unfollow/:username", identifyUser, userController.unfollowUserController)

module.exports = userRouter