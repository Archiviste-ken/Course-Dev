import userModel from "../models/user.model";

export async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [email, username],
  });

  if(isUserAlreadyExists){
    return res.status(401).json({
        message: "User already Exists, login in."
    })
  }

  




}
