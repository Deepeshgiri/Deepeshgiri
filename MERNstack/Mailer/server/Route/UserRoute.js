const express = require('express')

const router = express.Router()

const {getAlluser, createUser, userVerification} = require("../Controller/Usercontroller")

router.route('/').get(getAlluser)
router.route('/create').post(createUser)
router.route('/sendotp').post(userVerification)


module.exports = router