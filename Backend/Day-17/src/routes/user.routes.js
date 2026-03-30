const express = require("express")
const userController = require("../controllers/user.controller")

const userRouter = express.Router()



/**
 * @route POST /api/users/follow/:userid
 * @desc Follow a user
 * @access Private
 */
userRouter.post("/follow/:userid", userController.followUser)


module.exports = userRouter