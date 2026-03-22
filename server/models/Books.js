import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      requried: true,
    },
    imageURL:{
      type:String,
      default: "No Image",
    }
    ,
    genre: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
      default: "Space Books Inc.",
    },
    publishedDate: {
      type: Date,
      required: [true, "Published Date is required for Book"],
      min: [new Date(1800, 0,1), "Year must be before 1000"],
      max: [new Date(), "Year can't be from the future"],
    },

    quantity: {
      type: Number,
      default: 0,
      min: 0,
    },
    isbn: {
      type: String,
      required: true,
      default: "x-xxxxx-xxxx-xxxx-x",
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamp: true },
);

export default mongoose.model("Books", BookSchema);
