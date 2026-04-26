const {Router} = require("express")

const authController = require("../controllers/auth.controller")

const router = Router()



router.post("/register",authController.userRegister)


router.post("/login",authController.userLogin)


router.post("/get-me",authController.getUser)



module.exports = router