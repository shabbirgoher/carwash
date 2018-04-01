const uuidv1 = require('uuid/v1');
import passport from 'passport';

import Appointment from './../models/appointment';
import Car from './../models/car';
import MailSender from './../email/sender';

function calculateEndDate(pkg) {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth() + pkg.packagePeriods, today.getDate()).toUTCString();
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
            try {
                await appointment.save();
            }
            catch (err) {
                console.error('Unable to save appointment :: ' + err);
                return res.status(500).send({ message: 'Unable to save appointment' });
            }
            MailSender.sendConfirmationEmail(appointment);
            return res.status(201).send({});
        }
    )(req, res, next);
}

exports.registerCar = function (req, res, next) {
    passport.authenticate(
        ['jwt'],
        { session: false },
        async function (err, user, info) {
            if (!user)
                return res.status(401).send({ message: "Unauthenticated request...." });
            const car = new Car(req.body);
            car.carId = uuidv1();
            car.userId = user.userId;

            const validationErrors = car.validateSync();
            if (validationErrors) {
                return res.status(400).send(validationErrors.errors);
            }
            try {
                await car.save();
            }
            catch (err) {
                var message = "Unable to save car";
                console.error(message + ' :: ' + err);
                if (err.code === 11000) {
                    message = 'Duplicate entry for the car';
                }
                return res.status(500).send({ message: message });
            }
            return res.status(201).send({});
        }
    )(req, res, next);
}
exports.cars = function (req, res, next) {
    passport.authenticate(
        ['jwt'],
        { session: false },
        async function (err, user, info) {
            if (!user)
                return res.status(401).send({ message: "Unauthenticated request...." });
            try {
                const cars = await Car.find({ userId: user.userId }).exec();
                return res.status(200).send({ cars: cars });
            }
            catch (err) {
                var message = "Unable to get cars";
                console.error(message + ' for :: ' + user.userId + " :: " + err);
                return res.status(500).send({ message: message });
            }
        }
    )(req, res, next);
}