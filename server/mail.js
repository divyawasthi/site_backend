const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
  auth:{
    api_key:'divy.awasthi@gmail.com',
    domain:'jyydptdggoqymary'
  }
}

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (name,emailid,phone,whatsapp,college,admin_no,thsirt,chapter_name) => {
  const mailOptions = {
      sender: 'Divy Awasthi',
      from: 'divy.awasthi@gmail.com',
      to: emailid,
      subject:'SRC Registration',
      text:  `Thankyou for registering for SRC. `
  };

  transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
          console.log(err);
      } else {
          console.log(data)
      }
  });

// Exporting the sendmail

}
module.exports = sendMail;