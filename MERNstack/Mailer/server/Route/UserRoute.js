const express = require('express')

const router = express.Router()

const {getAlluser, createUser,  sendOTP, verifyEmailId, userLogin} = require("../Controller/Usercontroller")

router.route('/').get(getAlluser)
router.route('/create').post(createUser)
router.route('/sendotp').post(sendOTP)
router.route('/verify').post(verifyEmailId)
router.route('/login').post(userLogin)


module.exports = router