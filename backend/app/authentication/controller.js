import passport from 'passport';

exports.authenticate = function(req, res, next){
    console.log("uathenticating");
    var strategy = req.params.strategy;
    passport.authenticate(strategy)(req, res, next);
}

exports.authorize = function(req, res, next){
    var strategy = req.params.strategy;
    
    passport.authenticate(strategy, function (err, user, info) {
        if (err) {
            console.log('got error ' + err);
          return res.redirect('/auth/'+strategy);
        }
        if (!user) {
            console.log('user undefined');
          return res.redirect('/auth/'+strategy);
        }
        console.log(user);
        //return res.redirect('https://google.com');
        return res.redirect('OAuthLogin://login?user=' + JSON.stringify(user));
      })(req, res, next);
}
