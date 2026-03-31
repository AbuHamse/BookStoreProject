import User from "../models/User.js";

import APIErrorHandler from "../middleware/errorHandlerClass.js";
import asyncHandler from "../utils/asyncFunctionalHandler.js"


// 1. Get User Profile
// This runs AFTER your authHandler has verified the token
export const getUserProfile = asyncHandler(async (req, res, next) => {
    // req.user was set by your authHandler (it contains the userId)
    const user = await User.findById(req.user.userId).select("-password"); // "-password" hides the hash from the frontend

    if (!user) {
        return next(new APIErrorHandler("User not found", 404));
    }

    res.status(200).json({
        success: true,
        data: user
    });
});

// 2. Update User Profile
export const updateUserProfile = asyncHandler(async (req, res, next) => {
    // We only want to allow updates to specific fields
    const { firstName, lastName, bio, profilePictue, avatarPicture } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
        req.user.userId,
        { 
            firstName, 
            lastName, 
            bio, 
            profilePictue, 
            avatarPicture 
        },
        { 
            new: true, // Returns the fresh updated document
            runValidators: true // Ensures the new data follows your Schema rules
        }
    ).select("-password");

    if (!updatedUser) {
        return next(new APIErrorHandler("User not found", 404));
    }

    res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        data: updatedUser
    });
});