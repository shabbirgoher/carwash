exports.getUserById = function(userId){
    if(userId == 1){
        return {
            id: 1,
            name: 'shabbir'
        }
    }
}

exports.getUserByExternalId = function(strategy, profileId){
   
        return{
            name: "shabbir",
            id: 1
        }
}

exports.createUser = function(user, strategy, profileId){
    
}