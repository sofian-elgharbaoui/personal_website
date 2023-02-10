const transporter = require("../nodemailer/transporter");
require("dotenv").config();

const sendEmail = (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.json({ status: "failure", msg: "You must fill all fields" });
    return;
  }

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: subject,
    text: `From: ${name} (${email})\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).json({ err, msg: "Unable to send email" });
      return;
    }
    res.status(202).json({ info, msg: "Email sent" });
  });
};

module.exports = sendEmail;
