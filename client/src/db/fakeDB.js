// === STEP 1: Import Non-Fiction Images (11-25) ===
// Assuming your assets are in '../assets/' relative to this component.
import books11 from '../assets/books11.jpg';
import books12 from '../assets/books12.jpg';
import books13 from '../assets/books13.jpg';
import books14 from '../assets/books14.jpg';
import books15 from '../assets/books15.jpg';
import books16 from '../assets/books16.jpg';
import books17 from '../assets/books17.jpg';
import books18 from '../assets/books18.jpg';
import books19 from '../assets/books19.jpg';
import books20 from '../assets/books20.jpg';
import books21 from '../assets/books21.jpg';
import books22 from '../assets/books22.jpg';
import books23 from '../assets/books23.jpg';
import books24 from '../assets/books24.jpg';
import books25 from '../assets/books25.jpg';
// Import images... (keep your imports here)

// OPTION 1: Moving it OUTSIDE the component 
// This is the "Zero Rerender" approach.
const STATIC_BOOKS = [
  { id: 11, src: books11, title: "Biography" },
  { id: 12, src: books12, title: "History" },
  { id: 13, src: books13, title: "Philosophy" },
  { id: 14, src: books14, title: "Science" },
  { id: 15, src: books15, title: "Self Improvement" },
  { id: 16, src: books16, title: "Art & Design" },
  { id: 17, src: books17, title: "Politics" },
  { id: 18, src: books18, title: "True Crime" },
  { id: 19, src: books19, title: "Technology" },
  { id: 20, src: books20, title: "Economics" },
  { id: 21, src: books21, title: "Psychology" },
  { id: 22, src: books22, title: "Music" },
  { id: 23, src: books23, title: "Nature" },
  { id: 24, src: books24, title: "Travel" },
  { id: 25, src: books25, title: "Reference" },
];






















const _featuredBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 16.99,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 18.99,
    rating: 4.8,
  },
  {
    id: 3,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 14.99,
    rating: 4.3,
  },
  {
    id: 4,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 19.99,
    rating: 4.7,
  },
];

const _categories = [
  { name: "Fiction", count: 1250 },
  { name: "Non-Fiction", count: 890 },
  { name: "Science Fiction", count: 456 },
  { name: "Mystery", count: 678 },
  { name: "Romance", count: 543 },
  { name: "Biography", count: 321 },
];


export default STATIC_BOOKS