import "dotenv/config";
import connectToDB from "./db.js";
import { faker } from "@faker-js/faker";
import { randomDate, generateQuantity, syncSchema } from "../utils/utils.js";
import Books from "../models/Books.js";
import Author from "../models/Author.js";
import mongoose from "mongoose";


const seedDB = async () => {
  try {
    await connectToDB();
    console.log("Successfully Connected to DB.");

    await syncSchema(Books)
    console.log('Synced')

    await Books.deleteMany({});
    console.log("Successfully removed Old Book Data.");

    const authors = await Author.find();

    if (authors.length === 0) {
      throw new Error("No authors found. Run author seed first.");
    }

    const books = [];

    for (let i = 0; i < 30; i++) {
      const randomAuthor =
        authors[Math.floor(Math.random() * authors.length)];

      books.push({
        title: faker.book.title(),
        author: randomAuthor._id,
        imageURL:faker.image.url(),
        genre: faker.book.genre(), // ✅ fixed
        publisher: faker.book.publisher(),
        publishedDate: randomDate(), // ✅ fixed
        quantity: generateQuantity(), // ✅ fixed
        isbn: faker.commerce.isbn(),
      });
    }

    await Books.insertMany(books);

    console.log("Successfully seeded books! 📚");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding Error:", error.message);
    await mongoose.connection.close();
    process.exit(1);
  }
};

seedDB();