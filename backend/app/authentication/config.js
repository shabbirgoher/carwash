import passportJwt from 'passport-jwt';

const HOST_NAME = process.env.hostname || 'http://localhost:3000'
export const facebook = {
    clientID: '169403277001949',
    clientSecret: '176842234bed54a932976ea984fe646b',
    callbackURL: HOST_NAME + '/auth/facebook/callback',
    profileFields: ['id', 'name', 'displayName', 'email'],
};

export const jwtOptions = {
    // Get the JWT from the "Authorization" header.
    // By default this looks for a "JWT " prefix
    jwtFromRequest: passportJwt.ExtractJwt.fromHeader('authorization'),
    // The secret that was used to sign the JWT
    secretOrKey: 'shabbir',
    // The issuer stored in the JWT
    issuer: 'shabbir',
    // The audience stored in the JWT
    audience: 'shabbir'
  };