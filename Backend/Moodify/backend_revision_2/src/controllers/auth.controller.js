const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

async function userRegister(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyexists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyexists) {
    return res.status(400).json({
      message: "User already Exists",
    });
  }

   const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    },
  );

  res.cookie("token", token);

  return res.status(201).json({
    message: "User registered successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

async function userLogin(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(400).json({
      message: "Invalid Credentials",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: " Invalid Credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    },
  );

  res.cookie("token", token)



   return res.status(201).json({
        message: "User Logged in Successfully",
        user: {
            id: user.id,
            username: user.username,
            email: user.email,
        }
    })
}


module.exports = {

    userRegister,
    userLogin
}