exports.get = async function (forgotPasswordObj) {

    const toEmail = forgotPasswordObj.emailAddr;
    const mailText = '<p>As per your request, your password has been reset.</p><p>Password:' + forgotPasswordObj.password + '</p>';
    const mailSubject = 'Passwor reset';

    return {
        to: toEmail,
        subject: mailSubject,
        html: mailText
    }
}