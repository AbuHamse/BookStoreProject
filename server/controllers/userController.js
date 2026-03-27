import User from "../models/User";
import bcyrpt from "bcrypt";
import jwt from "jsonwebtoken";
import APIErrorHandler from "./errorHandlerClass";
import 'dotenv/config'

const registerController = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, role } = req.body;

    const checkingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!checkingUser) {
      return res.status(404).json({
        success: false,
        message: new APIErrorHandler("User or Email already exists,", 404),
      });
    }

    const salt = await bcyrpt.genSalt(10);
    const hashPassword = await bcyrpt.hash(password, salt);

    const newUser = await User.create({
      firstName,
      lastName,
      username,
      password: hashPassword,
      email,
      role: role || "user",
    });

    await newUser.save();

    if (!newUser) {
      return new APIErrorHandler("Invail Credentials", 404);
    } else {
      res
        .status(201)
        .json({ success: true, message: "User created Successfully" });
    }
  } catch (error) {
    console.error(error.stack);
    res
      .status(503)
      .json({
        success: false,
        message: new APIErrorHandler(
          "Unsuccessful creating user. Please try again",
          503,
        ),
      });
  }
};

const loginController = async (req, res) => {
 try {
     const { username, email, password } = req.body;

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res
      .status(404)
      .json({ success: false, message: "Invaild User, Not Found", data: user });
  }

  const isPasswordMatch = await bcyrpt.compare(password, user.password);

  if(!isPasswordMatch){
    return res
    .status(400)
    .json({success:false, message:"Password is Wrong. Invaild Credential."})
  }

  const jwtObject = {
    userId: user._id,
    username: user.username,
    role:user.role
  }

  const JWT_KEY = process.env.JWT_KEY

  const accessToken = jwt.sign(jwtObject,JWT_KEY, {expiresIn:"1h"})
  
  res.status(200).json({
    success:true,
    message:"Access Token Granted.",
    data:accessToken
  })

 } catch (error) {
    return res.status(500).json({succsss:false,message:"Invaild Access Token. Access Denied"})
 }
  


};

export default {registerController, loginController};
