const express = require('express')

const router = express.Router()

const {getAlluser} = require("../Controller/Usercontroller")

router.route('/').get(getAlluser)


module.exports = router