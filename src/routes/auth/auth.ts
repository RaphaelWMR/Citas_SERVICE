import express from 'express';
import { login } from '../../controllers/auth/auth';  // Assuming authController is a TypeScript file

const router = express.Router();

router.post('/login', login);

export default router;
