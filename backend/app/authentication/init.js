import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
// Import Facebook and Google OAuth apps configs
import { facebook, google } from './config';


const transformFacebookProfile = (profile, accessToken) => ({
    name: profile.name,
    avatar: profile.picture.data.url,
    accessToken: accessToken
  });
  
  // Transform Google profile into user object
  const transformGoogleProfile = function(profile, accessToken) {
    console.log(profile);  
    return{
        name: profile.name,
        avatar: profile.picture.data.url,
        accessToken: accessToken
    }
  }
  
  // Register Facebook Passport strategy
  passport.use(new FacebookStrategy(facebook,
    // Gets called when user authorizes access to their profile
    async (accessToken, refreshToken, profile, done)
      // Return done callback and pass transformed user object
      => done(null, transformGoogleProfile(profile._json, accessToken))
      //=> done(null, transformFacebookProfile(profile._json, accessToken))
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
  