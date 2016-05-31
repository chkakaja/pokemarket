var session = require('express-session');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var db = require('./db/config');
var Message = require('./db/models/message.js');
var User = require('./db/models/user');
var Item = require('./db/models/item');

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser());
app.use(session({
  secret: 'auction',
  maxAge: 60000
}));
app.use(passport.initialize());
app.use(passport.session());

// passport FB OAuth
passport.serializeUser(function(user, done) {
  console.log('serializeUser: ' + user.get('facebookId'));
  done(null, user.get('facebookId'));
});

passport.deserializeUser(function(facebookId, done) {
  console.log('deserialize', facebookId);
  User.where({ facebookId: facebookId }).fetch()
    .then(function(user) {
      done(null, user);
    })
    .catch(function(err) {
      done(err, null);
    })
});

passport.use(new FacebookStrategy({
    clientID: '523442607845905',
    clientSecret: '68d549f6999e92b32818e0993b737563',
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    enableProof: true
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      User.where({ facebookId: profile.id }).fetch()
        .then(function(user) {
          if (!user) {
            user = new User({
              username: profile.username,
              name: profile.displayName,
              facebookId: profile.id,
              picture: "https://graph.facebook.com/" + profile.username + "/picture" + "?width=200&height=200" + "&access_token=" + accessToken
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


// ***** should put all of the routing in routes.js
app.post('/getMessages', (req, res) => {
  new Message().fetchAll().then(messages => res.status(200).send(messages));
});

app.post('/sendMessage', (req, res) => {
  new Message(req.body).save().then(() => res.status(200));
});


// FB OAuth routes
app.get('/auth/facebook',
  passport.authenticate('facebook'));
 
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

app.get('/signout' , (req, res) => {
  req.logout();
  res.redirect('/');
});

// item selling form routes
app.post('/sellItem', (req, res) => {
  new Item(req.body).save().then(() => res.status(200));
});

app.listen(3000);
