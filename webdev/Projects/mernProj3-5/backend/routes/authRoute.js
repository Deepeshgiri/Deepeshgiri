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

//protected route

router.get('/user-auth',requireSignIn,(req,resp)=>{
    resp.status(200).send({
        ok:true,
        message:"protected route",
        status:"success"
    })
})
router.get('/admin-auth',requireSignIn,(req,resp)=>{
    resp.status(200).send({
        ok:true,
        message:"protected route",
        status:"success"
    })
})



export default router


