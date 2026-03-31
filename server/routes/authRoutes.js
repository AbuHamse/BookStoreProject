import express from 'express';
import { registerController, loginController } from '../controllers/authController.js';

const router = express.Router();

// Full path: /api/v1/auth/register
router.post('/register', registerController);
router.post('/login', loginController);

export default router;