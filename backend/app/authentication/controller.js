import passport from 'passport';
import {generateAccessToken} from './token'
exports.authenticate = function(req, res, next){
    console.log("uathenticating");
    var strategy = req.params.strategy;
    passport.authenticate(strategy, { session: false })(req, res, next);
}

exports.authorize = function(req, res, next){
    var strategy = req.params.strategy;
    
    passport.authenticate(strategy, { session: false }, function (err, user, info) {
        console.log(err);
        console.log(info);
        console.log(user);
        const accessToken = generateAccessToken(user.id);
        return res.redirect('OAuthLogin://login?token=' + accessToken);
    })(req, res, next);
}