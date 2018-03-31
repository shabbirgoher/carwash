import passport from 'passport';
var appointmentController = require('./controller')

module.exports = function (app){

    app.post('/appointment', appointmentController.bookAppointment)
    app.post('/appointment/registerCar', appointmentController.registerCar)
    app.get('/appointment/cars', appointmentController.cars)
}