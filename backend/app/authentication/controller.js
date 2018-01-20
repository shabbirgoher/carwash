import passport from 'passport';
import {generateAccessToken} from './token'
exports.authenticate = function(req, res, next){
    var strategy = req.params.strategy;
    passport.authenticate(strategy, { session: false })(req, res, next);
}

exports.authorize = function(req, res, next){
    var strategy = req.params.strategy;
    
    passport.authenticate(strategy, { session: false }, function (err, user, info) {
        const accessToken = generateAccessToken(user.userId);
        return res.redirect('OAuthLogin://login?token=' + accessToken);
    })(req, res, next);
}