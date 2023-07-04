const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')



  
  



// module.exports = sendMail;

// const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (name,emailid,phone,whatsapp,college,admin_no,tshirt,chapter_name) => {
  let testaccount = nodemailer.createTestAccount()
  let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
      user:'contact.src.svnit@gmail.com',
      pass:'lpfejxpvfsfsddnr',

    }
  })
  transporter.sendMail({
    from:'contact.src.svnit.@gmail.com',
    to:emailid,
    subject:'SRC-23 Registration',
    text:`Thank you for registering for SRC \n
    Your form details are given below :\n
    Name:${name}\n email : ${emailid} \n
    phone:${phone} \n whatsapp:${whatsapp}\n
    College:${college}\n admin_no:${admin_no}
    \ntshirt-size:${tshirt}\naiche-chaptername:${chapter_name}
    `,
    html:''
  },function(error,info){
    if (error){console.log(error)}
    else {console.log(info.response)}
  })
// Exporting the sendmail

}
module.exports = sendMail;