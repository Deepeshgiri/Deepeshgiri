import express from 'express'
import { loginController, registerController, testController } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authmiddleWare.js'

//router object
const router = express.Router()

// routiing
//register || method post

router.post('/register', registerController)
// console.log("i got hit at authRoutes")


//login 
router.post('/login', loginController)

//test
router.get('/test',requireSignIn, isAdmin, testController )

router.get('/user-auth', requireSignIn, (req,resp)=>{
    resp.status(200).send({ok:true})
})

export default router