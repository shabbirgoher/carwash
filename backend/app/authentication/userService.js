import mongoose from 'mongoose';
const uuidv1 = require('uuid/v1');

import User from './../models/user';
import TempUser from './../models/incompeleteUser'

exports.getUserOrTempUserById = function(userId){
    return User.findOne({'userId': userId}) || TempUser.findOne({'userId': userId});
}

exports.getUserByExternalId = function(strategy, profileId){
    return User.findOne({strategy: profileId}) || TempUser.findOne({strategy: profileId});
}

exports.createUser = function(user){
    const newUser = new User(user)
    newUser.userId = uuidv1();

    var error = newUser.validateSync();
    if(error){
        console.debug("validation failde"+ error);
        const tempUser = new TempUser(newUser);
        tempUser.userId = "temp-"+uuidv1();
        tempUser.save();
        return tempUser;
    }
    else{
        newUser.save();
        return newUser;
    }
}