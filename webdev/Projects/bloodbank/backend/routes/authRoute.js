import express from 'express';
import { currentUserController, loginController, registerController } from '../controllers/authController.js';

import { requireSignIn } from '../middlewares/middleware.js'
// router object
const router = express.Router();

//routes of a user

router.post('/register',registerController);

router.post('/login', loginController)

router.get('/currentuser', requireSignIn,currentUserController)
export default router;


