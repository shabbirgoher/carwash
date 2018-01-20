import mongoose from 'mongoose';
const uuidv1 = require('uuid/v1');

import User from './../models/user';
import TempUser from './../models/incompeleteUser'
exports.getUserById = function(userId){
    // if(userId == 1){
    //     return {
    //         id: 1,
    //         name: 'shabbir'
    //     }
    // }
}

exports.getUserByExternalId = function(strategy, profileId){
        console.debug("No user availble ");
        // return{
        //     name: "shabbir",
        //     id: 1
        // }
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