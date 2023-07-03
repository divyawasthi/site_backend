const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


  
 // let testAccount = await nodemailer.createTestAccount(); 
 let transporter = nodemailer.createTransport({ 
    service: "gmail", 
    auth: { 
      user: "webhunters4@gmail.com", 
      pass: "uhqsfcehjgqqdpke", 
    }, 
  }); 
   
  const sendMail = (userData) => { 
    // console.log(userData.email); 
    // console.log(event); 
    const options = { 
      from: "webhunters4@gmail.com", 
      to: userData.emailid, 
      subject: "Successfully Registered for the SRC", 
      text: `You are successfully registered for Student Regional Conference 2023.`, 
    }; 
   
    //   options.text = `You are successfully registered for ${event} event.`; 
   
    transporter.sendMail(options, function (err, info) { 
      if (err) { 
        console.log(err); 
      } else { 
        console.log("Message sent: %s", info.messageId); 
      } 
    }); 
  }; 
   
  module.exports = { sendMail };