import User from "../models/User.js";
import APIErrorHandler from "../middleware/errorHandlerClass.js";
import asyncHandler from "../utils/asyncFunctionalHandler.js";

// 1. Get User Profile
export const getUserProfile = asyncHandler(async (req, res, next) => {
    // req.user was set by authHandler as the full user object
    // We just need to make sure we don't send the password back
    const user = req.user;

    if (!user) {
        return next(new APIErrorHandler("User not found", 404));
    }

    // Convert to object and remove password if it's there
    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(200).json({
        success: true,
        data: userResponse // This is what UserProfilePage.jsx is waiting for!
    });
});

// 2. Update User Profile
export const updateUserProfile = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, bio, profilePictue, avatarPicture } = req.body;

    // Use req.user._id (Mongoose default) or req.user.id
    const updatedUser = await User.findByIdAndUpdate(
        req.user._id, 
        { 
            firstName, 
            lastName, 
            bio, 
            profilePictue, 
            avatarPicture 
        },
        { 
            new: true, 
            runValidators: true 
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