import Books from "../models/Books.js";

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
  const id = req.params.id;
  console.log(id);
};

const postSingleBookById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
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
  postSingleBookById,
  editBookById,
  deleteBookById,
};
