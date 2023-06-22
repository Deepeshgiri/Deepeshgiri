import express from 'express'
import { loginController, registerController } from '../controllers/authController.js'

//router object
const router = express.Router()

// routiing
//register || method post

router.post('/register', registerController)
// console.log("i got hit at authRoutes")


//login 
router.post('/login', loginController)

export default router