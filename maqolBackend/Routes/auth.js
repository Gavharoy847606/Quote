import express from 'express';
import { getProfile, login, register } from '../Controllers/authController.js';
import { authMiddleware } from '../middleWare/middleware.js';
const router = express.Router();



router.get('/profile', authMiddleware, getProfile);
router.post('/register', register);
router.post('/login', login);

export default router;
