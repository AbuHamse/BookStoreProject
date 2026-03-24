import Author from "../models/Author.js";

/**
 * @desc    Get all authors
 * @route   GET /api/authors
 */
const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await Author.find({});

    if (!allAuthors || allAuthors.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No authors found in the database.",
      });
    }

    res.status(200).json({
      success: true,
      count: allAuthors.length,
      data: allAuthors,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/**
 * @desc    Create a new author
 * @route   POST /api/authors
 */
const createAuthor = async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);

    res.status(201).json({
      success: true,
      message: "Author created successfully",
      data: newAuthor,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create author",
    });
  }
};

/**
 * @desc    Get single author by ID
 * @route   GET /api/authors/:id
 */
const getSingleAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);

    if (!author) {
      return res.status(404).json({
        success: false,
        message: `Author not found with ID: ${req.params.id}`,
      });
    }

    res.status(200).json({ success: true, data: author });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid ID format" });
  }
};

/**
 * @desc    Update author by ID
 * @route   PUT /api/authors/:id
 */
const editAuthorById = async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true } // returns the updated doc & runs schema checks
    );

    if (!updatedAuthor) {
      return res.status(404).json({ success: false, message: "Author not found" });
    }

    res.status(200).json({
      success: true,
      message: "Author updated successfully",
      data: updatedAuthor,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Delete author
 * @route   DELETE /api/authors/:id
 */
const deleteAuthor = async (req, res) => {
  try {
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);

    if (!deletedAuthor) {
      return res.status(404).json({ success: false, message: "Author not found" });
    }

    res.status(200).json({
      success: true,
      message: "Author deleted successfully",
      data: {} // Commonly return empty object or the deleted object
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid ID format" });
  }
};

export default {
  getAllAuthors,
  createAuthor,
  getSingleAuthorById,
  editAuthorById,
  deleteAuthor,
};