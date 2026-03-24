import express from "express";
import authorController from "../controllers/authorController.js";

const {
  getAllAuthors,
  createAuthor,
  getSingleAuthorById,
  editAuthorById,
  deleteAuthor,
} = authorController;

const router = express.Router();

router.get("/", getAllAuthors);
router.post("/upload", createAuthor);
router.get("/:id", getSingleAuthorById);
router.put("/edit/:id", editAuthorById);
router.delete("/:id", deleteAuthor);


export default router 