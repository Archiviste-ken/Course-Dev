// const bcrypt = require("bcryptjs")
// const jwt = require("jsonwebtoken")
// const userModel = require("../model/user.model")


// async function registerController(req, res) {
    
// const {username, email, password , bio , profile_image} = req.body
// // const isUserExistsByEmail =  await userModel.findOne({email})
// //     if(isUserExistsByEmail){
// //     return res.status(400).json({
// //         message: "Email already exists"
// //                 })}

// //         const isUserExistsByUsername = await userModel.findOne({username})

// //         if(isUserExistsByUsername){
// //             return res.status(400).json({
// //                 message: "Username already exists"
// //             })
// //         }

// const isUserAlreadyExists = await userModel.findOne({
//     $or: [
//         {email},
//         {username}
//     ]
// })
//     if(isUserAlreadyExists){
//         return res.status(400)
//         .json({
//             // message: "User already exists" isUserAlreadyExists.email ? "Email already exists" : "Username already exists"
            
//            message: "User already exists" + (isUserAlreadyExists.email) == email ? "Email already exists" : "Username already exists"
//         })
//     }
//    const hash = await bcrypt.hash(password, 10) 

//     const user = await userModel.create({
//         username,
//         email,
//         bio,
//         profile_image,
//         password: hash
//     })
//         /**
//          * user ka data hona chaiye
//          * dat unique hona chaiye
//          */
//     console.log(process.env.JWT_SECRET);
    
//     const token = jwt.sign({
            
//             id: user._id,
//             username: user.username
            
//         }, process.env.JWT_SECRET,{expiresIn:"1d"}
//     )

//         res.cookie("token", token)

//         res.status(201).json({
//             message: "User registered successfully",
//             user: {
//                 username: user.username,
//                 email: user.email,
//                 bio: user.bio,
//                 profileImage: user.profile_image
//             }})
// }


// async function loginController(req,res) {
//     const {username ,email, password} = req.body

//     const user  = await userModel.findOne({

//         $or:[
//             {
//                 username: username
//             },
//             {
//                 email:  email
//             },
//         ]
//     })
//     if (!user) {
//         return res.status(400).json({
//             message: "User not found"
//         })
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password)

//     if(!isPasswordValid){
//         return res.status(401).json({
//             message: "Invalid password"
//         })
//     }

//     const token = jwt.sign(
//         { id: user._id, username: user.username },
//         process.env.JWT_SECRET,
//         { expiresIn: "1d" }
//     )

//     res.cookie("token", token)

//     res.status(200).json({
//         message: "Login successful",
//         user: {
//             username: user.username,
//             email: user.email,
//             bio: user.bio,
//             profileImage: user.profile_image
//         }
//     })

// }


// module.exports = {
//     registerController,
//     loginController
// }



const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");

async function registerController(req, res) {
  try {
    const { username, email, password, bio, profile_image } = req.body;

    console.log({ username, email, password });
    
    // ✅ validation
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // ✅ check existing user
    const isUserAlreadyExists = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (isUserAlreadyExists) {
      const message =
        isUserAlreadyExists.email === email
          ? "Email already exists"
          : "Username already exists";

      return res.status(400).json({ message });
    }

    // ✅ hash password
    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      bio,
      profile_image,
      password: hash,
    });

    // ✅ create token
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        username: user.username,
        email: user.email,
        bio: user.bio,
        profileImage: user.profile_image,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

async function loginController(req, res) {
  try {
    const { username, email, password } = req.body;

    const identifier = username || email;

    const user = await userModel.findOne({

      $or: [{ username: identifier },
        
        
        { email: identifier }],

    }).select("+password");

console.log("REQ BODY:", req.body);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        username: user.username,
        email: user.email,
        bio: user.bio,
        profileImage: user.profile_image,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}


async function getMeController(req, res) {

    const userId = req.user.id

    const user = await userModel.findById(userId)

  
    res.status(200).json({
      user: { 
        username: user.username,
        email: user.email,
        bio: user.bio,
        profileImage: user.profile_image,

      },
    });

    console.log(user.username);
  }


module.exports = {
  registerController,
  loginController,
  getMeController
};