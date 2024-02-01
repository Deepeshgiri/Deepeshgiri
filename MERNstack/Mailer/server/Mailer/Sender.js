const transporter = require('./Mailer.js');
// const nodemailer = require('nodemailer');


// const transporter = nodemailer.createTransport({
//     service: 'Outlook.com', // e.g., Gmail
//     auth: {
//         user: 'softspintechnology@gmail.com',
//         pass: 'Ellipses@123',
//     },
// });

// Email content
const mailOptions = {
  from: 'softspintechnology@gmail.com',
  to: 'dabangdeepesh@gmail.com',
  subject: ' NodeMailer',
  text: 'This is a test email sent from Node.js using NodeMailer.',
  attachments: [
    {
      filename: 'example.txt',
      content: 'This is the content of the attachment.',
    },]
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error:', error);
  }
  console.log('Email sent:', info);
});
