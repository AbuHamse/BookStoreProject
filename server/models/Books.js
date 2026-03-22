import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:Author,
    requried:true
  }
  ,

  description: {
    type: String,
    required: true,
    default: "",
  },

  publishedDate: {
    type: Number,
    required:[true,"Published Date is required for Book"],
    min:[1000, "Year must be before 1000"],
    max:[new Date().getFullYear(), "Year can't be from the future"]
  },

  quantity: {
    type: Number,
    default: 0,
    min: 0,
  },
  
  isAvailable:{
    type:Boolean,
    default:true
  }
},{timestamp:true});

export default mongoose.model('Books',BookSchema)
