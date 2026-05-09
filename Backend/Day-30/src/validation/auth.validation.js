import { body, validationResult } from "express-validator";
 
 const validate = (req,res,next) => {

    const errors = validateResult(req)

    if( errors.isEmpty()) {

        return next()
    }
    
    res.status(400).json({
        errors: errors.array()
    })

 }
 
 
 
 export const registerValidation =
 
 
 [
    body("username").isString().withMessage("Username should be String"),
    body("email").isEmail().withMessage("Email should be valid email address"),
    validate
    
  ],