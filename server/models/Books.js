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
    type: Date,
    default: new Date(Date.now),
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
});

export default mongoose.model('Books',BookSchema)
