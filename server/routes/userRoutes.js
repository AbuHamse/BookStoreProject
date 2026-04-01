import express from 'express';
import { 
    getAllUsers, 
    getUserById, 
    getUserProfile, 
    updateUserProfile 
} from '../controllers/userController.js';
import authHandler from '../middleware/authHandler.js';

const router = express.Router();

// Public/Admin route to see everyone
router.get('/', authHandler, getAllUsers);

// Your existing private profile routes
router.get('/profile', authHandler, getUserProfile);
router.put('/profile', authHandler, updateUserProfile);

// Specific user lookup
router.get('/:id', authHandler, getUserById);

export default router;