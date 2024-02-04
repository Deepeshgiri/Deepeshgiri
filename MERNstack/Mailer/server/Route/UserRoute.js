const express = require('express')
// const verified = require('../Middleware/verifiedMail.js')

const router = express.Router()

const {getAlluser, createUser,  sendOTP, verifyEmailId, userLogin, verification} = require("../Controller/Usercontroller")
const { verified, createSecretKey } = require('../Middleware/verifiedMail')



router.route('/').get(getAlluser)
router.route('/create').post(createUser)
router.route('/sendotp').post(sendOTP)
router.route('/verify' ).post(verifyEmailId)
router.route('/login').post(userLogin)
router.route('/testverify').post(verified,verification)

module.exports = router