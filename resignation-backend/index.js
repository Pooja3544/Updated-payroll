const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like 'yahoo', 'outlook', etc.
  auth: {
    user: 'poojapradeep3544@gmail.com', // Replace with your email
    pass: 'wgdspoyjsfsqjijb',        // Replace with your email password or an app-specific password
  },
});

// Route to handle resignation submission
app.post('/send-resignation', async (req, res) => {
  const { name, id, domain, reason, managerEmail } = req.body;

  const mailOptions = {
    from: 'poojapradeep3544@gmail.com',
    to: managerEmail,
    subject: 'Resignation Notification',
    text: `Employee ${name} (ID: ${id}) from domain ${domain} has submitted a resignation.\nReason: ${reason}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Resignation email sent successfully' });
  } catch (error) {
    console.error('Error sending resignation email:', error);
    res.status(500).send({ message: 'Failed to send resignation email' });
  }
});

// Route to handle manager discussion notification
app.post('/send-discussion-notification', async (req, res) => {
  const { name, id, managerEmail } = req.body;

  const mailOptions = {
    from: 'poojapradeep3544@gmail.com',
    to: managerEmail,
    subject: 'Discussion Request',
    text: `Employee ${name} (ID: ${id}) has requested a discussion regarding their resignation.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Discussion notification email sent successfully' });
  } catch (error) {
    console.error('Error sending discussion notification email:', error);
    res.status(500).send({ message: 'Failed to send discussion notification email' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
