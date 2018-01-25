import passport from 'passport';
import {generateAccessToken} from './token'
import User from './../models/user'

exports.authenticate = function(req, res, next){
    var strategy = req.params.strategy;
    passport.authenticate(strategy, { session: false })(req, res, next);
}

exports.authorize = function(req, res, next){
    var strategy = req.params.strategy;
    
    passport.authenticate(strategy, { session: false }, function (err, user, info) {
        const accessToken = generateAccessToken(user.userId);
        var missingKeys = '';
        const validationErrors = new User(user).validateSync();
        if(validationErrors)
        {
            missingKeys = '&missing=' + Object.keys(validationErrors.errors).join(',');
        }
        return res.redirect('OAuthLogin://login?token=' + accessToken + missingKeys);
    })(req, res, next);
}