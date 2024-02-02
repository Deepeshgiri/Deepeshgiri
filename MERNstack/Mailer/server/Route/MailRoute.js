const express = require ('express')
const mailcontroller = require('../Controller/Mailcontroller')

const router = express.Router()

router.route('/mail').post(mailcontroller)

module.exports = router