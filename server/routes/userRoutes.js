// In routes/userRoutes.js
import express from 'express';
import {getUserProfile, updateUserProfile} from '../controllers/userController.js'
import authHandler from '../middleware/authHandler.js';

const router = express.Router();

// This makes the full path: GET /api/v1/users/profile
router.get('/profile', authHandler, getUserProfile);

// This makes the full path: PUT /api/v1/users/profile
router.put('/profile', authHandler, updateUserProfile);

export default router;