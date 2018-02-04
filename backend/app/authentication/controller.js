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

async function saveUser(res, userObj){
    const userSchema = new User(userObj);            
    userSchema.userId = uuidv1();
    try{    
        const validationErrors = userSchema.validateSync();
        if(validationErrors){
            return res.status(400).send(validationErrors.errors);
        }
        else{
            await userSchema.save();
            return generateToken(res, userSchema.userId);
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).send({message: 'Unable to save data'});
    }
}

function generateToken(res, id){
    const response = {token: generateAccessToken(id)};
    return res.status(200).send(response);
}

exports.socialSignUp = function(req, res, next){
    passport.authenticate(
        ['tempJwt'], 
        {session: false}, 
        async function(err, user, info){
            if(!user)
                return res.status(401).send({message: "Unauthenticated request...."});
            const newUser = {...user._doc, ...req.body};
            return await saveUser(res, newUser);
        }
    )(req, res, next);
}

exports.localSignUp = async function(req, res, next){
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const credential = req.body;
    var error = [];
    if(!credential.email || !emailReg.test(credential.email)){
        error.push("Invalid email address");
    }
    if(!credential.password || credential.password.length < 8){
        error.push("Invalid password")
    }
    if(!credential.mobileNumber || credential.mobileNumber.length != 10){
        error.push("Invalid mobile number")
    }
    if(error.length > 0){
        return res.status(400).send({message: error.join('\n')});
    }
    return await saveUser(res, credential);
}

exports.localLogin = async function(req, res, next){
    const credential = req.body;
    try{
    console.log('local login'+req.body);        
        const user = await User.findOne({email: credential.email}).exec();
        console.log(user);
        if(user && user.password === credential.password){
            return generateToken(res, user.userId);
        }
        return res.status(401).send({message: 'Invalid email or password'});
    }
    catch(err){
        console.error(err);        
        return res.status(500).send({message: 'Unable to fetch data'});
    }
}

//TODO: Create token
exports.regeneratePassword = function(req, res, next){
    const emailAddr = req.body.emailAddr;
    console.log("regenerating password :: " + emailAddr)
    return res.sendStatus(200);
}

exports.resetPassword = function(req, res, next){
    const reqBody = req.body;
    console.log("old password :: " + reqBody.oldPassword + " new password :: " + reqBody.newPassword)
    return res.sendStatus(200);
}

