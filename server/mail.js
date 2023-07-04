const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')



  
  



// module.exports = sendMail;

// const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (name,emailid,phone,whatsapp,college,admin_no,thsirt,chapter_name) => {
  let testaccount = nodemailer.createTestAccount()
  let transporter = nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port:587,
    auth:{
      user:'carole.dare33@ethereal.email',
      pass:'c3cSKKJJJ1hsm8EenK',

    }
  })
  transporter.sendMail({
    from:'SRC SVNIT',
    to:emailid,
    subject:'SRC-23 Registration',
    text:'Thankyou for registering for SRC',
    html:''
  })
// Exporting the sendmail

}
module.exports = sendMail;