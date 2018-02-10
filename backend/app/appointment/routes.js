import passport from 'passport';
var appointmentController = require('./controller')

module.exports = function (app){

    app.post('/appointment', appointmentController.bookAppointment)
}