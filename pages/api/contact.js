
export default function (req, res) {
  require('dotenv').config();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'pierreyan.com@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData = {
    from: 'pierreyan.com@gmail.com',
    to: 'pierreyan@college.harvard.edu',
    subject: `Message From ${req.body.name}`,
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  })
  
  console.log(req.body);
  res.send('success');
}