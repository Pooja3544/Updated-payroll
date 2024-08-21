const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'poojapradeep3544@gmail.com', 
    pass: 'wrtmcanwvuskvuuf', 
  },
});

// Route to send an email when a leave request is submitted
app.post('/send-leave-request', (req, res) => {
  const { email, leaveType, leaveFromDate, leaveToDate, reason } = req.body;

  const mailOptions = {
    from: 'poojapradeep3544@gmail.com',
    to: email, // Manager's email address
    subject: 'New Leave Request Submitted',
    text: `A new leave request has been submitted:\n\nType: ${leaveType}\nFrom: ${leaveFromDate}\nTo: ${leaveToDate}\nReason: ${reason}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Route to send an email when a leave request is accepted/rejected
app.post('/update-leave-status', (req, res) => {
  const { email, leaveType, leaveFromDate, leaveToDate, status } = req.body;

  const mailOptions = {
    from: 'poojapradeep3544@gmail.com',
    to: email, // Manager's email address
    subject: `Leave Request ${status}`,
    text: `The leave request has been ${status}:\n\nType: ${leaveType}\nFrom: ${leaveFromDate}\nTo: ${leaveToDate}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
