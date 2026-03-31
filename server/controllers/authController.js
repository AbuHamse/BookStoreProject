import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import APIErrorHandler from "../middleware/errorHandlerClass.js";
import asyncHandler from "../utils/asyncFunctionalHandler.js"

export const registerController = asyncHandler(async (req, res, next) => {
    // 1. Extract ALL fields from the frontend request
    const { firstName, lastName, username, email, password, role, avatarPicture, profilePictue } = req.body;

    // 2. Check if user exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        return next(new APIErrorHandler("Username or Email already exists", 400));
    }

    // 3. Hash Password (Fixed 'bcyrpt' to 'bcrypt')
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // 4. Create User
    const newUser = await User.create({
        firstName,
        lastName,
        avatarPicture, 
        profilePictue, // Note: You have 'Pictue' (no 'r') in your Schema
        username,
        email,
        password: hashPassword,
        role: role || "user",
    });

    res.status(201).json({ success: true, message: "User created Successfully" });
});

export const loginController = asyncHandler(async (req, res, next) => {
    // Usually, the frontend sends one 'identifier' field (could be email OR username)
    // and one 'password' field. 
    const { identifier, password } = req.body; 

    // 1. Find User (Check if identifier matches username OR email)
    const user = await User.findOne({ 
        $or: [{ username: identifier }, { email: identifier }] 
    });

    if (!user) {
        return next(new APIErrorHandler("Invalid credentials", 401));
    }

    // 2. Compare Password (Fixed the 'bcyrpt' typo)
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        return next(new APIErrorHandler("Invalid credentials", 401));
    }

    // 3. Generate Token
    const jwtObject = { userId: user._id, username: user.username, role: user.role };
    const accessToken = jwt.sign(jwtObject, process.env.JWT_SECRET, { expiresIn: "1h" });

    // 4. Send Response
    res.status(200).json({
        success: true,
        message: "Login successful",
        accessToken,
        user: {
            username: user.username,
            role: user.role,
            avatar: user.avatarPicture // Helpful for your frontend header!
        }
    });
});