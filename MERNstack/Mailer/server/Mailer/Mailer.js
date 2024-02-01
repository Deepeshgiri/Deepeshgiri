const nodemailer = require('nodemailer');
require('dotenv').config({ path: '../.env'})

const user = process.env.USERMAIL;
const pass = process.env.PASSWORD;

console.log(user,pass)
// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'Outlook',
  auth: {
    user: user,
    pass: pass,
  },
});

// Export the transporter for later use
module.exports = transporter;
