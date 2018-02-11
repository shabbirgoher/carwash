var nodemailer = require('nodemailer');

import ConfirmationTemplate from './confirmationTemplate';

const emailFrom = process.env.EMAIL_FROM;
const emailPwd = process.env.EMAIL_PWD;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailFrom,
        pass: emailPwd
    }
});

exports.sendConfirmationEmail = async function (mailObject) {
    let mailOptions = await ConfirmationTemplate.getConfirmationEmailTemplate(mailObject);
    if(!mailOptions){
        console.error('mailoption not provided');
        return;
    }
    sendMail(mailOptions);
}

function sendMail(mailOptions){
    mailOptions.from = emailFrom;
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error('unabele to send email :: ' + mailOptions)
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
