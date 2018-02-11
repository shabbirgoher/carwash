import User from './../models/user';

exports.getConfirmationEmailTemplate = async function (appointment) {
    var toEmail;
    try {
        const user = await User.findOne({ userId: appointment.userId }).exec();
        toEmail = user.email;
    }
    catch (err) {
        console.error('Unable to get user for userId: ' + appointment.userId + '::' + err);
        return;
    }
    if (!toEmail) return;

    const mailText = 'Your appointment is booked successfully. Will contact you our phone.';
    const mailSubject = 'Appointment successful';

    return {
        to: toEmail,
        subject: mailSubject,
        text: mailText
    }
}