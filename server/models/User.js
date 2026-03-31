import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    // Fixed typo and added a default placeholder
    profilePicture: {
      type: String,
      default: "https://via.placeholder.com/150", 
      trim: true,
    },
    // Changed required to false so users can sign up quickly
    bio: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      // Simple regex for email validation
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    password: {
      type: String,
      required: true,
      minlength: 3, // Basic security constraint
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// Exporting as "User" (Singular)
export default mongoose.model("User", UserSchema);