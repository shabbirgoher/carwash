import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
// Import Facebook and Google OAuth apps configs
import { facebook, google,  jwtOptions} from './config';
import passportJwt from 'passport-jwt';
import users from './userService';


const transformFacebookProfile = (profile) => ({
    name: profile.name,
    avatar: profile.picture.data.url
  });
  
  // Transform Google profile into user object
  const transformGoogleProfile = function(profile) {
    console.log(profile);  
    return{
        name: profile.name,
        avatar: profile.picture.data.url
    }
  }

  passport.use(new passportJwt.Strategy(jwtOptions, (payload, done) => {
    const user = users.getUserById(parseInt(payload.sub));
    if (user) {
        return done(null, user, payload);
    }
    return done();
  }));

  // Register Facebook Passport strategy
  passport.use(new FacebookStrategy(facebook,
    function (accessToken, refreshToken, profile, done){
      let user = users.getUserByExternalId('facebook', profile.id);
      if (!user) {
        user = users.createUser(transformFacebookProfile(profile._json), 'facebook', profile.id);
      }
      return done(null, user);
    }
  ));
  
  // Register Google Passport strategy
//   passport.use(new GoogleStrategy(google,
//     async (accessToken, refreshToken, profile, done)
//       => done(null, transformGoogleProfile(profile._json))
//   ));
  
  module.exports = function(app){
      app.use(passport.initialize());
      require('./routes')(app);
  }
//   // Serialize user into the sessions
//   passport.serializeUser((user, done) => done(null, user));
  
//   // Deserialize user from the sessions
//   passport.deserializeUser((user, done) => done(null, user));
  