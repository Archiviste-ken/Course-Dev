const {Router} = require("express")

const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const router = Router()



router.post("/register", authController.userRegister)

router.post("/login", authController.userLogin)

router.get("/get-me", authMiddleware.identifyUser , authController.getMe)

router.get("/logout",authController.logoutUser)





module.exports = router