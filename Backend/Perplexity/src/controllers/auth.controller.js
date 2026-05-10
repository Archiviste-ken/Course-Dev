import userModel from "../models/user.model";

export async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [email, username],
  });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User already Exists, login in.",
      success: false,
      err: "User already exists",
    });
  }

  const user = await userModel.create({
    username,
    password,
    email,
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

  res.cookie("cookie", cookie);

  return res.status(201).json({
    message: "The User is registered successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}
