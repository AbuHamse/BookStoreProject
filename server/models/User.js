import mongoose from "mongoose";
import bcrypt from 'bcrypt'

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
    avatarPicture: {
      type: String,
      trim: true,
    },
    // C
    // Fixed typo and added a default placeholder
    profilePicture: {
      type: String,
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
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
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
  { timestamps: true },
);

// --- THE FIX: PASSWORD HASHING MIDDLEWARE ---
UserSchema.pre('save', async function(next) {
    // Only hash the password if it's new or being modified
    if (!this.isModified('password')) return next();

    try {
        // Generate a salt (extra security layer)
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the salt
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

// Method to check password during login
UserSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Exporting as "User" (Singular)
export default mongoose.model("User", UserSchema);
