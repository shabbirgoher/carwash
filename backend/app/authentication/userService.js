import mongoose from 'mongoose';
const uuidv1 = require('uuid/v1');

import User from './../models/user';
import TempUser from './../models/incompeleteUser';

exports.getUserById = async function (userId) {
    const query = { 'userId': userId };
    try {
        return await User.findOne(query).exec();
    }
    catch (err) {
        console.error("getUserById::Unable to fetch from DB : " + err);
    }
}

exports.getTempUserById = async function (userId) {
    var query = { 'userId': userId };
    try {
        return await TempUser.findOne(query).exec();
    }
    catch (err) {
        console.error("getTempUserById::Unable to fetch from DB : " + err);
    }
}

exports.getUserByExternalId = async function (strategy, profileId) {
    var query = {};
    query[strategy] = profileId;
    try {
        return await User.findOne(query).exec() || await TempUser.findOne(query).exec();
    }
    catch (err) {
        console.error("getUserByExternalId::Unable to fetch from DB : " + err);
    }
}

exports.createUser = async function (user) {
    let newUser = new User(user)
    newUser.userId = uuidv1();
    var error = newUser.validateSync();
    if (error) {
        console.debug("validation failde" + error);
        let tempUser = new TempUser(newUser);
        tempUser.userId = "temp-" + uuidv1();
        await tempUser.save();
        return tempUser;
    }
    else {
        await newUser.save();
        return newUser;
    }
}