import API from '../api/axios';

export const fetchAllData = async () => {
  try {
    // You can run these in parallel for faster loading
    const [usersRes, authorsRes, booksRes] = await Promise.all([
      API.get('/users'),
      API.get('/authors'),
      API.get('/books')
    ]);

    return {
      users: usersRes.data,
      authors: authorsRes.data,
      books: booksRes.data
    };
  } catch (error) {
    console.error("Error fetching bookstore data:", error);
    throw error;
  }
};

// Auth services
export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (credentials) => API.post('/auth/login', credentials);