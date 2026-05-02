const {Router} = require("express")
const authController = require("../controllers/auth.controllers")
const authMiddleware = require("../middlewares/auth.middleware")
const router = Router()


router.post("/register",authController.userRegister)

router.post("/login",authController.userLogin)

router.get("/get-me",authMiddleware.identifyUser, authController.getUser)




module.exports = router