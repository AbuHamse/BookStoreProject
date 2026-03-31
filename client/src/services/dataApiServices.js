import API from '../api/axios';

/**
 * --- BULK DATA FETCHING ---
 * Used for Dashboards or main listing pages
 */
export const fetchAllData = async () => {
  try {
    const [usersRes, authorsRes, booksRes] = await Promise.all([
      API.get('/users'),
      API.get('/authors'),
      API.get('/books')
    ]);

    return {
      // We use .data?.data to safely access the array sent by your controllers
      users: usersRes.data?.data || usersRes.data,
      authors: authorsRes.data?.data || authorsRes.data,
      books: booksRes.data?.data || booksRes.data
    };
  } catch (error) {
    console.error("Error fetching bookstore data:", error);
    throw error;
  }
};

/**
 * --- AUTHENTICATION SERVICES ---
 */
export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (credentials) => API.post('/auth/login', credentials);

/**
 * --- USER & PROFILE SERVICES ---
 */
// Fetches the logged-in user's data using the JWT in the interceptor
export const getUserProfile = () => API.get('/users/profile');

// Sends the bio, names, or base64 images to the backend
export const updateUserProfile = (updateData) => API.put('/users/profile', updateData);

/**
 * --- BOOK SERVICES ---
 */
export const getBookById = (id) => API.get(`/books/${id}`);
export const createBook = (bookData) => API.post('/books', bookData);
export const updateBook = (id, bookData) => API.put(`/books/${id}`, bookData);
export const deleteBook = (id) => API.delete(`/books/${id}`);

/**
 * --- AUTHOR SERVICES ---
 */
export const getAuthorById = (id) => API.get(`/authors/${id}`);
export const createAuthor = (authorData) => API.post('/authors', authorData);
export const updateAuthor = (id, authorData) => API.put(`/authors/${id}`, authorData);
export const deleteAuthor = (id) => API.delete(`/authors/${id}`);