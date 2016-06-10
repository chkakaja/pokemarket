var session = require('express-session');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');

module.exports = function(app, express, passport) {
  app.use(session({
    secret: 'auction',
    maxAge: 60000
  }));
  app.use(passport.initialize());
  app.use(passport.session());


  passport.use(new FacebookStrategy({
      // **you will need to create your own fb developer account and input your own clientID and clientSecret
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: process.env.PROTOCOL + process.env.HOST + ':' + process.env.PORT + '/auth/facebook/callback',
      enableProof: true,
      profileFields: ['id', 'displayName', 'gender', 'picture.type(large)', 'emails']
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        User.where({ facebookId: profile.id }).fetch()
          .then(function(user) {
            // creates user if not found
            // console.log(profile);
            if (!user) {
              user = new User({
                name: profile.displayName,
                facebookId: profile.id,
                picture: profile.photos[0].value
              }).save();
            }
            return user;
          })
          .then(function(user) {
            done(null, user);
          })
          .catch(function(err) {
            done(err, null);
          });
      })
    }
  ));

  passport.serializeUser(function(user, done) {
    // console.log('serializeUser: ' + user.get('facebookId'));
    done(null, user.get('facebookId'));
  });

  passport.deserializeUser(function(facebookId, done) {
    // console.log('deserialize', facebookId);
    User.where({ facebookId: facebookId }).fetch()
      .then(function(user) {
        done(null, user);
      })
      .catch(function(err) {
        done(err, null);
      });
  });
}