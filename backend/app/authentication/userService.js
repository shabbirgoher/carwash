import mongoose from 'mongoose';
const uuidv1 = require('uuid/v1');

import User from './../models/user';
import TempUser from './../models/incompeleteUser'

exports.getUserOrTempUserById = function(userId, callback){
    var query = {'userId': userId};
    User.findOne(query, function(err, user){
        if(err){
            console.log("Unable to fetch from DB");
            return callback()
        }
        if(!user){
            TempUser.findOne(query, function(err, user){
                if(err){
                    console.log("Unable to fetch from DB");
                    return callback()
                }
                return callback(user);
            });
        }
        return callback(user);
    });

    // getUserOrTempUserByIdAsync(userId).then(function(user){
    //     callback(userId);
    // }, function(err){
    //     console.error("unable to fetch user from DB" + err);
    // });
}
async function getUserOrTempUserByIdAsync(userId){
    var user = await User.findOne({'userId': userId}).exec() || await TempUser.findOne({'userId': userId}).exec()
    return user;
}

exports.getUserOrTempUserByIdAsync = getUserOrTempUserByIdAsync;

exports.getUserByExternalId = function(strategy, profileId, callback){
    var query = {};
    query[strategy] = profileId;
    User.findOne(query, function(err, user){
        if(err){
            console.log("Unable to fetch from DB");
            return callback()
        }
        if(!user){
            TempUser.findOne(query, function(err, user){
                if(err){
                    console.log("Unable to fetch from DB");
                    return callback()
                }
                return callback(user);
            });
        }
        else{
            return callback(user);            
        }
    });

    // getUserByExternalIdAsync(trategy, profileId).then(function(user){
    //     callback(userId);
    // }, function(err){
    //     console.error("unable to fetch user from DB for external ID :: " + profileId + " error :: " + err);
    // });
}

exports.getUserByExternalIdAsync = getUserByExternalIdAsync;

async function getUserByExternalIdAsync (strategy, profileId){
    var user = await User.findOne({strategy: profileId}).exec() || await TempUser.findOne({strategy: profileId}).exec()
    return user;
}

exports.createUser = function(user, callback){
    this.createUserAsync(user).then(function(user){
        callback(user);
    }, function(error){
        console.error("Unable to create user :: " + error);
    });
}

exports.createUserAsync = createUserAsync;
async function createUserAsync(user){
    const newUser = new User(user)
    newUser.userId = uuidv1();

    var error = newUser.validateSync();
    if(error){
        console.debug("validation failde"+ error);
        const tempUser = new TempUser(newUser);
        tempUser.userId = "temp-"+uuidv1();
        await tempUser.save();
        return tempUser;
    }
    else{
        await newUser.save();
        return newUser;
    }
}