import express from 'express';
import {  
    getUserProfile,   // Make sure these are exported in your controller
    updateUserProfile 
} from '../controllers/userController.js';
import authHandler from '../middleware/authHandler.js'; 

const router = express.Router();


// --- Protected Routes ---
// These require the "Authorization: Bearer <token>" header
// This handles the data for your <UserProfilePage />
router.get('/profile', authHandler, getUserProfile); 

// This allows users to update their bio/picture from the profile page
router.put('/profile', authHandler, updateUserProfile);

export default router;