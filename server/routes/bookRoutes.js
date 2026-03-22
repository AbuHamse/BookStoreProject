import express from "express";
import booksController from "../controllers/booksController.js";

const {
  getAllBooks,
  getSingleBookById,
  createBook,
  editBookById,
  deleteBookById,
} = booksController;

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);
router.get("/:id", getSingleBookById);
router.put("/:id", editBookById);
router.delete("/:id", deleteBookById);

export default router;
