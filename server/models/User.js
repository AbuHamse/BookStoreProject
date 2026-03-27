import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },

    lastName:{
        type:String,
        required:true,
        trim:true
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
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"], // only allow 'user' or 'admin' roles
      default: "user",
    }

},{timestamps:true})

export default mongoose.model('Users', UserSchema)