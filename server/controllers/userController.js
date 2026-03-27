import User from "../models/User.js";s
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
    const { username, email, password } = req.body;

    // 1. Find User
    const user = await User.findOne({ $or: [{ username }, { email }] });
    if (!user) {
        return next(new APIErrorHandler("Invalid credentials", 401));
    }

    // 2. Compare Password
    const isPasswordMatch = await bcyrpt.compare(password, user.password);
    if (!isPasswordMatch) {
        return next(new APIErrorHandler("Invalid credentials", 401));
    }

    // 3. Generate Token
    const jwtObject = { userId: user._id, username: user.username, role: user.role };
    const accessToken = jwt.sign(jwtObject, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
        success: true,
        message: "Login successful",
        accessToken // Send it back clearly
    });
});