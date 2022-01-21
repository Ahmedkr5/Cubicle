const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config({
  path: './config.env',
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '253331416889-rfaiss32tgabqkuv7ci9b91duqam7sfg.apps.googleusercontent.com',
      clientSecret: '2E1aUyROykcUmRoWEKRhhaUj',
      callbackURL: 'https://the-cubicle.herokuapp.com/api/auth/google/callback',
      passReqToCallback: true,
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile, accessToken);
    }
  )
);
