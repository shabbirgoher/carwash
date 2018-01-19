const jwt = require('jsonwebtoken');
import { jwtOptions} from './config';

// Generate an Access Token for the given User ID
export function generateAccessToken(userId) {
  // How long will the token be valid for
  const expiresIn = '1 hour';
  // Which service issued the token
  const issuer = jwtOptions.issuer;
  // Which service is the token intended for
  const audience = jwtOptions.audience;
  // The signing key for signing the token
  const secret = jwtOptions.secretOrKey;

  const token = jwt.sign({}, secret, {
    expiresIn: expiresIn,
    audience: audience,
    issuer: issuer,
    subject: userId.toString()
  });

  return token;
}