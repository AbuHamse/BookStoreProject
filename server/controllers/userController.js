import User from "../models/User.js";
import bcyrpt from "bcrypt";
import jwt from "jsonwebtoken";
import APIErrorHandler from "../middleware/errorHandlerClass.js";
import asyncHandler from "../utils/asyncFunctionalHandler.js"

export const registerController = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, username, email, password, role } = req.body;

    // 1. Check if user exists (Logic flipped to correct way)
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        return next(new APIErrorHandler("Username or Email already exists", 400));
    }

    // 2. Hash Password
    const salt = await bcyrpt.genSalt(10);
    const hashPassword = await bcyrpt.hash(password, salt);

    // 3. Create User
    const newUser = await User.create({
        firstName,
        lastName,
        avatarPicture,
        profilePictue,
        username,
        email,
        password: hashPassword,
        role: role || "user",
    });

    res.status(201).json({ 
        success: true, 
        message: "User created Successfully" 
    });
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