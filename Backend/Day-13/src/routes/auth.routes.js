const express = require("express");
const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");
const crypto = require("crypto")
const authRouter = express.Router(); // this is the router for the authentication related routes, we will use this router in our app.js file and prefix it with /api/auth, so all the routes defined in this file will be prefixed with /api/auth.

// if we want to create api routes in other files other than app.js, we need to create a router for that file and then use that router in app.js file, this way we can keep our code organized and modular.

/**
 * /api/route/register
 */

authRouter.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });
  const isNameAlreadyExists = await userModel.findOne({ name });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exists with this email address",
    });
  }
  if (isNameAlreadyExists) {
    return res.status(409).json({
      message: "Name already exists",
    });
  }

  const hash = crypto.createHash("md5").update(password).digest("hex")
  const user = await userModel.create({
    email,
    password : hash,
    name,
  })

  //   const token = jwt.sign(
  //     {
  //       // JWt = JSON Web Token. When the user logs in or registers, the server gives them this token so they don't need to log in again on every request.
  //       id: user._id,
  //       email: user.email,
  //     },
  //     process.env.JWT_SECRET,
  //   );

  //   res.cookie("jwt_token", token);
  //   res.status(201).json({
  //     message: "user register",
  //     user,
  //     token,
  //   });

  //     const token = jwt.sign({
  //         id: user._id,
  //         email: user.email
  //     },
  //     process.env.JWT_SECRET
  // )
  // res.cookie("jwt cookie", token)
  //     res.status(201).json({
  //         message: "user register", user , token
  //     })

  //       const token = jwt.sign({
  //           id: user._id,
  //           email: user.email,
  //       },
  //       process.env.JWT_SECRET,
  //   );

  //       res.cookie("jwt_token", token);
  //           res.status(201).json({
  //               message: "user register", user , token
  //           });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  )

  res.cookie("jwt_token", token);
  res.status(201).json({
    message: "user register",
    user,
    token,
  })

  
})

/**
   * /api/auth/protected
   */

/**
 *  controller function
 */


  authRouter.post("/protected", (req, res) => {
    console.log(req.cookies);

    res.status(201).json({
      message: "This is a protected route",
    })
  }
)

authRouter.post("/login", async (req,res)=>{        // call back function
            const {email, password} = req.body
            const user = await userModel.findOne({email})
            if(!user){
              return res.status(404).json({
                message: "User not found with this email address"
              })
            }
        const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex")

        if(!isPasswordMatched){
          return res.status(401).json({
            message: "Invalid Password"
          })
        }


        const token = jwt.sign({
          id: user._id,
        
        },
        process.env.JWT_SECRET
      )

      res.cookie("jwt_token",token)


      res.status(200).json({
        message: "User logged in",
        user,
      })
})




module.exports = authRouter;
