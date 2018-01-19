import passport from 'passport';

module.exports = function (app){

    app.get('/api/secure',
        passport.authenticate(['jwt'], { session: false }),
        (req, res) => {
            res.send('Secure response from ' + JSON.stringify(req.user));
        });
}