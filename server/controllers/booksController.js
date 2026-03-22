import Books from "../models/Books.js";
import Author from "../models/Author.js";
import mongoose from "mongoose";

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Books.find({});
    if (allBooks?.length <= 0) {
      res.status(404).json({
        success: false,
        message: "There are no Books available",
        data: allBooks.length,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "There are books available",
        data: allBooks,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "There are no books available",
    });
    console.log(error.message);
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(getCurrentBookID)){
      throw new Error('Invaild Mongoose ID.')
    }
    const bookDetailsByID = await Books.findById(getCurrentBookID);

    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message:
          "Book with the current ID is not found! Please try with a different ID",
      });
    }

    res.status(200).json({
      success: true,
      data: bookDetailsByID,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const createBook = async (req, res) => {
  try {
    const {
      title,
      author,
      imageURL,
      genre,
      publisher,
      publishedDate,
      quantity,
      isbn,
      isAvailable
    } = req.body;

    // ✅ Validate author ID format
    if (!author) {
      return res.status(400).json({
        success: false,
        message: "Author is required",
      });
    }

    // ✅ Check if author exists
    const authorExists = await Author.findById(author);

    if (!authorExists) {
      return res.status(404).json({
        success: false,
        message: "Author not found",
      });
    }

    // ✅ Create book with controlled fields
    const newBook = await Books.create({
      title,
      author,
      imageURL,
      genre,
      publisher,
      publishedDate,
      quantity,
      isbn,
      isAvailable
    });

    return res.status(201).json({
      success: true,
      message: "Book successfully created",
      data: newBook,
    });

  } catch (error) {
    // duplicate key
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Duplicate field value (likely title or isbn)",
      });
    }

    // validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    console.error("Error creating book:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error Occurred",
    });
  }
};

const editBookById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
};

const deleteBookById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
};

export default {
  getAllBooks,
  getSingleBookById,
  createBook,
  editBookById,
  deleteBookById,
};
