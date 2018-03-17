import passport from 'passport';
const uuidv1 = require('uuid/v1');

import { generateAccessToken } from './token'
import User from './../models/user'
import ForgotPassword from './../models/forgotPassword';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

exports.authenticate = function (req, res, next) {
    var strategy = req.params.strategy;
    passport.authenticate(strategy, { session: false })(req, res, next);
}

exports.authorize = function (req, res, next) {
    var strategy = req.params.strategy;

    passport.authenticate(strategy, { session: false }, function (err, user, info) {
        if (!user)
            return res.redirect('OAuthLogin://login?err=userNotAvailable');
        const accessToken = generateAccessToken(user.userId);
        var missingKeys = '';
        const validationErrors = new User(user).validateSync();
        if (validationErrors) {
            missingKeys = '&missing=' + Object.keys(validationErrors.errors).join(',');
        }
        return res.redirect('OAuthLogin://login?token=' + accessToken + missingKeys);
    })(req, res, next);
}

async function saveUser(res, userObj) {
    const userSchema = new User(userObj);
    userSchema.userId = uuidv1();
    try {
        const validationErrors = userSchema.validateSync();
        if (validationErrors) {
            return res.status(400).send(validationErrors.errors);
        }
        else {
            await userSchema.save();
            return generateToken(res, userSchema.userId);
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Unable to save data' });
    }
}

function generateToken(res, id) {
    const response = { token: generateAccessToken(id) };
    return res.status(200).send(response);
}

exports.socialSignUp = function (req, res, next) {
    passport.authenticate(
        ['tempJwt'],
        { session: false },
        async function (err, user, info) {
            if (!user)
                return res.status(401).send({ message: "Unauthenticated request...." });
            const newUser = { ...user._doc, ...req.body };
            return await saveUser(res, newUser);
        }
    )(req, res, next);
}

exports.localSignUp = async function (req, res, next) {
    var errors = [];
    var credential = {};
    credential.emailAddr = validateEmailAddr(req.body.emailAddr, errors);
    credential.password = validatePassword(req.body.password, errors);
    credential.mobileNumber = validateMobileNumber(req.body.mobileNumber, errors);
    if (errors.length > 0) {
        return res.status(400).send({ message: errors.join('\n') });
    }
    return await saveUser(res, credential);
}

exports.localLogin = async function (req, res, next) {
    var errors = [];
    try {
        const emailAddr = validateEmailAddr(req.body.emailAddr, errors);
        const password = validatePassword(req.body.password, errors);
        if (errors.length > 0) {
            return res.status(400).send({ message: errors.join('\n') });
        }
        const user = await User.findOne({ emailAddr: emailAddr }).exec();
        if (user && user.password === password) {
            return generateToken(res, user.userId);
        }
        return res.status(401).send({ message: 'Invalid email or password' });
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Unable to fetch data' });
    }
}

exports.regeneratePassword = async function (req, res, next) {
    var errors = [];
    const emailAddr = validateEmailAddr(req.body.emailAddr, errors);
    if (errors.length > 0) {
        return res.status(400).send({ message: errors.join('\n') });
    }
    const user = await User.findOne({ emailAddr: emailAddr }).exec();
    if (!user) {
        return res.status(400).send({ message: 'Invalid email' });
    }
    let forgotPasswordSchema = new ForgotPassword();
    forgotPasswordSchema.userId = user.userId;
    forgotPasswordSchema.emailAddr = emailAddr;
    forgotPasswordSchema.id = uuidv1();
    const password = Math.floor(Math.random() * 9000000000) + 1000000000;
    forgotPasswordSchema.password = password;
    await forgotPasswordSchema.save();
    return generateToken(res, forgotPasswordSchema.id);
}

exports.resetPassword = async function (req, res, next) {
    passport.authenticate(
        ['reset-pwd-jwt'],
        { session: false },
        async function (err, user, info) {
            var errors = [];
            const emailAddr = validateEmailAddr(req.body.emailAddr, errors);
            const oldPassword = validatePassword(req.body.oldPassword, errors);
            const newPassword = validatePassword(req.body.newPassword, errors);
            if (errors.length > 0) {
                return res.status(400).send({ message: errors.join('\n') });
            }
            const forgotPassword = await ForgotPassword.findOne({ emailAddr: emailAddr, id: user.id }).exec();
            if (forgotPassword && forgotPassword.password === oldPassword) {
                await User.update({ userId: user.userId }, { password: newPassword }).exec()
                return generateToken(res, user.userId);
            }
            return res.status(401).send({ message: 'Invalid email or password' });
        }
    )(req, res, next);

}

function validateEmailAddr(emailAddr, errors) {
    if (!emailAddr) {
        errors.push('Please provide email address');
        return "";
    }
    const email = emailAddr.trim().toUpperCase();
    if (!emailReg.test(email)) {
        errors.push('Invalid email address');
    }
    return email;
}
function validatePassword(password, errors) {
    if (!password) {
        errors.push('Please provide password');
        return "";
    }
    if (password.length < 8) {
        errors.push('Invalid password');
    }
    return password;
}
function validateMobileNumber(mobileNumber, errors) {
    if (!mobileNumber) {
        errors.push('Please provide mobile number');
        return "";
    }
    if (mobileNumber.length != 8) {
        errors.push('Invalid mobile number');
    }
    return mobileNumber;
}