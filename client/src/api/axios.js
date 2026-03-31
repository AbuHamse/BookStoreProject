import axios from 'axios';

// 1. Wrap everything in a single configuration object
const API = axios.create({
    baseURL: '/api/v1',
    headers: { 
        'Content-Type': 'application/json' 
    }
});

// 2. Fix the interceptor return value
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    
    if (token) {
        // Attach the token to the headers
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    // CRITICAL: You must return the 'config' object, not the token!
    return config; 
}, (error) => {
    return Promise.reject(error);
});

export default API;