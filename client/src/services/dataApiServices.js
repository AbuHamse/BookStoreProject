import API from '../api/axios';

/**
 * --- BULK DATA FETCHING ---
 * Hits /authors and /books for the dashboard.
 */
export const fetchAllData = async () => {
  try {
    const [authorsRes, booksRes] = await Promise.all([
      API.get('/authors'),
      API.get('/books')
    ]);

    return {
      authors: authorsRes.data?.data || authorsRes.data || [],
      books: booksRes.data?.data || booksRes.data || []
    };
  } catch (error) {
    console.error("Error fetching bookstore data:", error);
    throw error;
  }
};

/**
 * --- AUTH & USER SERVICES ---
 */
export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (credentials) => API.post('/auth/login', credentials);
export const getUserProfile = () => API.get('/users/profile');
export const updateUserProfile = (updateData) => API.put('/users/profile', updateData);

/**
 * --- RESOURCE SERVICES ---
 */
export const getBooks = () => API.get('/books');
export const getAuthors = () => API.get('/authors');