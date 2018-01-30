import passport from 'passport';
const uuidv1 = require('uuid/v1');

import {generateAccessToken} from './token'
import User from './../models/user'

exports.authenticate = function(req, res, next){
    var strategy = req.params.strategy;
    passport.authenticate(strategy, { session: false })(req, res, next);
}

exports.authorize = function(req, res, next){
    var strategy = req.params.strategy;
    
    passport.authenticate(strategy, { session: false }, function (err, user, info) {
        if(!user)
            return res.redirect('OAuthLogin://login?err=userNotAvailable');
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

exports.signUp = function(req, res, next){
    passport.authenticate(
        ['tempJwt'], 
        {session: false}, 
        function(err, user, info){
            if(!user)
                return res.status(401).send("Unauthenticated request....");
            const newUser = {...user._doc, ...req.body};
            const userSchema = new User(newUser);            
            userSchema.userId = uuidv1();            
            const validationErrors = userSchema.validateSync();
            if(validationErrors){
                return res.status(400).send(validationErrors.errors);
            }
            else{
                userSchema.save();
                const response = {token: generateAccessToken(userSchema.userId),user: userSchema};
                return res.status(200).send(response);
            }
        }
    )(req, res, next);
}