const uuidv1 = require('uuid/v1');
import passport from 'passport';

import Appointment from './../models/appointment';
import MailSender from './../email/sender';

function calculateEndDate(packageType) {
    const today = new Date();
    var monthsToAdd;
    if (packageType.includes('1Month'))
        monthsToAdd = 1;
    if (packageType.includes('3Month'))
        monthsToAdd = 3;
    if (packageType.includes('6Month'))
        monthsToAdd = 6;
    if (packageType.includes('12Month'))
        monthsToAdd = 12;
    return new Date(today.getFullYear(), today.getMonth() + monthsToAdd, today.getDate()).toUTCString();
}

exports.bookAppointment = function (req, res, next) {
    passport.authenticate(
        ['jwt'],
        { session: false },
        async function (err, user, info) {
            if (!user)
                return res.status(401).send({ message: "Unauthenticated request...." });
            const appointment = new Appointment(req.body);
            appointment.appointmentId = uuidv1();
            appointment.userId = user.userId;
            appointment.startDate = new Date().toUTCString();
            appointment.endDate = calculateEndDate(appointment.package);

            const validationErrors = appointment.validateSync();
            if (validationErrors) {
                return res.status(400).send(validationErrors.errors);
            }
            try{
                await appointment.save();
            }
            catch(err){
                console.error('Unable to save appointment :: '+err);
                return res.status(500).send({message: 'Unable to save appointment'});
            }
            MailSender.sendConfirmationEmail(appointment);
            return res.status(201).send({});
        }
    )(req, res, next);
}