import mongoose from "mongoose";


const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  author:{
    type:String,
    requried:true
  }
  ,

  genere: {
    type: String,
    required: true,
    default: "",
  },
  publisher:{
    type:String,
    required:true,
    default:"Space Books Inc.",
  }
  ,

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
