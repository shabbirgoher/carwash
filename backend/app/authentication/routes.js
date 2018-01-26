import passport from 'passport';
var authController = require('./controller')

module.exports = function (app){

    
    app.get('/auth/:strategy', authController.authenticate);
    // app.get('/auth/google', (req, res, next) => authController.authenticate('google', next));
    app.get('/auth/:strategy/callback', 
        //(req, res, next) => authController.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
        authController.authorize
    );
    // app.get('/auth/google/callback', 
    //     (req, res, next) => authController.authenticate('google', { failureRedirect: '/auth/facebook' }),
    //     (req, res, next) => authController.authorize()
    // );

    app.post('/auth/signUp', authController.signUp)
}