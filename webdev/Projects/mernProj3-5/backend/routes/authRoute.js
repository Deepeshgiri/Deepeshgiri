import express from 'express'
import {loginController, registrationController, testController }from '../controllers/authController.js'
import { requireSignIn } from '../middlewares/authMiddlewares.js'


//router object
const router = express.Router()

//routing 
//registration || method POST
router.post('/register', registrationController)

//login || post method
router.post('/login', loginController)

//test route ||get method

router.get('/test',requireSignIn, testController)

export default router


