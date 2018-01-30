import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
// Import Facebook and Google OAuth apps configs
import { facebook, google, jwtOptions } from './config';
import passportJwt from 'passport-jwt';
import users from './userService';

const transformFacebookProfile = (profile) => ({
  facebook: profile.id,
  userName: profile.name,
  email: profile.email
});

const transformGoogleProfile = function (profile) {
  console.log(profile);
  return {
    name: profile.name,
    avatar: profile.picture.data.url
  }
}

passport.use('jwt', new passportJwt.Strategy(jwtOptions,
  async function (payload, done) {
    let user = await users.getUserById(payload.sub);
    if (user) {
      return done(null, user, payload);
    }
    return done();
  }));

passport.use('tempJwt', new passportJwt.Strategy(jwtOptions,
  async function (payload, done) {
    let user = await users.getTempUserById(payload.sub);
    if (user) {
      return done(null, user, payload);
    }
    return done();
  }));

// Register Facebook Passport strategy
passport.use(new FacebookStrategy(facebook,
  async function (accessToken, refreshToken, profile, done) {
    try {
      var user = await users.getUserByExternalId('facebook', profile.id);
      if (!user) {
        user = await users.createUser(transformFacebookProfile(profile._json))
      }
      return done(null, user);
    }
    catch (err) {
      console.error("FacebookStrategy::Unable to get or save user:" + err);
      return done(err);
    }
  }));

// Register Google Passport strategy
//   passport.use(new GoogleStrategy(google,
//     async (accessToken, refreshToken, profile, done)
//       => done(null, transformGoogleProfile(profile._json))
//   ));

module.exports = function (app) {
  app.use(passport.initialize());
  require('./routes')(app);
}
//   // Serialize user into the sessions
//   passport.serializeUser((user, done) => done(null, user));

//   // Deserialize user from the sessions
//   passport.deserializeUser((user, done) => done(null, user));
