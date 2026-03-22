import express from "express";
import booksController from "../controllers/booksController.js";

const {
  getAllBooks,
  getSingleBookById,
  postSingleBookById,
  editBookById,
  deleteBookById,
} = booksController;

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getSingleBookById);
router.post("/:id", postSingleBookById);
router.put("/:id", editBookById);
router.delete("/:id", deleteBookById);

export default router;
