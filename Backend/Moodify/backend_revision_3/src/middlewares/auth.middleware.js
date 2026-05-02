const userModel = require("../models/user.model");
const blacklistModel = require("../models/blacklist.model");
const jwt = require("jsonwebtoken");
const redis = require("../config/cache");

async function identifyUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token not provided",
    });
  }

  const isTokenblacklisted = await redis.get(token);

  if (isTokenblacklisted) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    return res.send(401).json({
      message: "Invalid Token",
    });
  }
}

module.exports = { identifyUser };
