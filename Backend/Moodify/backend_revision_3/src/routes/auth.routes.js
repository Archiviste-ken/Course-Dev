const {Router} = require("express")
const authController = require("../controllers/auth.controllers")
const router = Router()


router.post("/register",authController.userRegister)

router.post("/login",authController.userLogin)




module.exports = router