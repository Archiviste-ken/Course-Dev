const userModel = require("../models/user.model");
const blacklistModel = require("../models/blacklist.model")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const redis = require("../config/cache");

async function userRegister(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User is already Registed",
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
    message: "User registered Successfully",
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
    },
  });
}

async function userLogin(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel
    .findOne({
      $or: [{ username }, { email }],
    })
    .select("+password");

  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      user: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    },
  );

  res.cookie("token", token);

  return res.status(201).json({
    message: "User logged in Successfully",
    user: {
      id: user._id,
      user: user.username,
      email: user.email,
    },
  });
}

async function getUser(req, res) {
  const user = await userModel.findById(req.user.id);

  return res.status(200).json({
    message: "User fetched Successfully",
    user,
  });
}

async function logoutUser(req, res) {

  const token = req.cookies.token;


  console.log(token.length);
  

  if(!token){
    return res.status(401).json({
      message: "The user is already logged Out"
    })
  }

  res.clearCookie("token");

  await redis.set(token, Date.now().toString(), "EX", 60 * 60);

  res.status(200).json({
    message: "User loggedOut Successfully",
  });
}

module.exports = { userRegister, userLogin, getUser, logoutUser };
