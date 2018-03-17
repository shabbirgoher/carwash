var Mailgun = require('mailgun-js');

import Mail from './../models/mail';
import ConfirmationTemplate from './confirmationTemplate';
import ForgotPasswordTemplate from './forgotPssswordTemplate';
const uuidv1 = require('uuid/v1');

const emailFrom = process.env.EMAIL_FROM;
const api_key = process.env.EMAILGUN_API_KEY;
const domain = process.env.EMAIL_DOMAIN;
const sendEmail = process.env.SEND_EMAIL || false;
const INITIATED = 'INITIATED';
const FAILED = 'FAILED';
const SUCCESS = 'SUCCESS';
const DISABLED = 'DISABLED';

const mailgun = new Mailgun({ apiKey: api_key, domain: domain });

async function saveMailInDb(mailOptions, type) {
    var mail = new Mail();
    mail.mailId = uuidv1();
    mail.emailAddr = mailOptions.to || 'UNKNOWN';
    mail.emailType = type;
    mail.emailStatus = INITIATED;
    await saveEmail(mail);
    return mail;
}

exports.sendConfirmationEmail = async function (mailObject) {
    let mailOptions = await ConfirmationTemplate.getConfirmationEmailTemplate(mailObject);
    var mail = await saveMailInDb(mailOptions, 'CONFIRMATION');
    if (!mailOptions) {
        console.error('mailoption not provided');
        return;
    }
    sendMail(mailOptions, mail);
}

exports.sendForgotPasswordEmail = async function (forgotPasswordObj) {
    let mailOptions = await ForgotPasswordTemplate.get(forgotPasswordObj);
    var mail = await saveMailInDb(mailOptions, 'FORGOT_PWD');
    if (!mailOptions) {
        console.error('mailoption not provided');
        return;
    }
    sendMail(mailOptions, mail);
}

function sendMail(mailOptions, mail) {
    mailOptions.from = emailFrom;
    if (!sendEmail) {
        console.log("Sending email is disabled");
        mail.emailStatus = DISABLED;
        saveEmail(mail);
        return;
    }
    mailgun.messages().send(mailOptions, function (err, body) {
        if (err) {
            console.log("got an error: ", err);
            mail.emailStatus = FAILED;
            mail.emailResponse = err;
        }
        else {
            console.log(body);
            mail.emailStatus = SUCCESS;
        }
        saveEmail(mail);
    });
}

async function saveEmail(mail) {
    try {
        await mail.save();
    }
    catch (err) {
        console.log('Unable to save mail data');
    }
}
