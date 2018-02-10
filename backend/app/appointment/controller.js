const uuidv1 = require('uuid/v1');
import passport from 'passport';

exports.bookAppointment = function (req, res, next) {
    passport.authenticate(
        ['jwt'],
        { session: false },
        function (err, user, info) {
            if (!user)
                return res.status(401).send({ message: "Unauthenticated request...." });
            return res.status(201).send({});
        }
    )(req, res, next);
}