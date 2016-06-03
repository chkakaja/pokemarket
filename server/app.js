var session = require('express-session');
var express = require('express');
var db = require('./db/config');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var db = require('./db/config');
var Message = require('./db/models/message.js');
var User = require('./db/models/user');
var Item = require('./db/models/item');
var WatchList = require('./db/models/watchlist');

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser());
app.use(session({
  secret: 'auction',
  maxAge: 60000
}));
app.use(passport.initialize());
app.use(passport.session());

// ########################### SOCKET.IO CODE ###########################
// ########### DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING ############
var http = require('http').Server(app);
exports.io = require('socket.io')(http);

app.use(express.static(__dirname + '/../public'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

require('./socket.js');

// ######################### END SOCKET.IO CODE #########################

// ##################### GETS USERID FOR MESSAGES #######################

app.post('/getMessages', (req, res) => {
  console.log(req.body.sender, req.body.receiver);
  Message
  .query({ where: { sender: req.body.sender, receiver: req.body.receiver },
           orWhere: { sender: req.body.receiver, receiver: req.body.sender }})
  .orderBy('created_at', 'ASC')
  .fetchAll()
  .then(messages => {
    res.status(200).send(messages);
  });
});

app.post('/sendMessage', (req, res) => {
  new Message(req.body).save().then(() => res.status(200));
});

app.get('/getuserid', (req, res) => {
  if (req.session.hasOwnProperty('passport')) {
    User.where({ facebookId: req.session.passport.user }).fetch().then(user => {
      res.status(200).send(user);
    });
    return;
  }     
  res.sendStatus(404);
});

// app.get('/getname', (req, res) => {
//   User
//     .where({ id: req.query.id })
//     .fetch()
//     .then(user => {
//       res.status(200).send(user.name);
//     });
// });

app.get('/getuserfacebookid', (req, res) => {
  if (req.session.passport) {
    res.send(req.session.passport.user);
  } else {
    res.send();
  }
});

app.get('/getItemData', (req, res) => {
  Item.where({ id: req.query.id }).fetch()
    .then(function(item) {
      User.where({ id: item.attributes.seller_id }).fetch()
        .then(function(seller) {
          item.attributes.seller = seller.attributes;
          res.status(200).send(item.attributes);
        })
    })
    .catch(function(err) {
      res.send('Error:', err);
    })
});

app.post('/updateBid', (req, res) => {
  Item.where({ id: req.body.id }).fetch()
    .then(function(item) {
      if (req.body.newBid > item.attributes.currentBid) {
        item.set({ currentBid: req.body.newBid }).save();
      }
      res.send(item.attributes);
    })
    .catch(function(err) {
      res.send('Error:', err);
    })
});

app.get('/watchitem', (req, res) => {
  WatchList.where({ user_id: req.query.user_id, item_id: req.query.item_id }).fetch()
    .then(function(result) {
      console.log(result);
      if (result === null) {
        new WatchList(req.query).save().then(() => res.send(req.query.item_id));
      } else {
        result.destroy();
        res.send("Unwatched item");
      }
    })
    .catch(function(err) {
      res.send('Error:', err);
    });
});

app.post('/addvisit', (req, res) => {
  console.log(req.body);
  Item.where(req.body).fetch()
    .then(function(item) {
      if (item.attributes.visits === null) {
        item.set({ visits: 0 }).save();
      }
      item.set({ visits: item.attributes.visits + 1}).save();
      res.send(item);
    })
    .catch(function(err) {
      res.send('Error:', err);
    });
});

app.get('/getWatchedItems', (req, res) => {
  db.knex('watchlists')
    .where({ user_id: req.query.user_id })
    .innerJoin('items', 'items.id', '=', 'watchlists.item_id')
    .then(items => {
      res.send(items);
    })
    .catch(err => {
      res.send('Error:', err);
    });
});

app.get('/getListedItems', (req, res) => {
  Item.where({ seller_id: req.query.user_id }).fetchAll()
    .then(items => {
      res.send(items);
    })
    .catch(err => {
      res.send('Error:', err);
    });
});

app.get('/getPopularItems', (req, res) => {
  Item.forge().orderBy('visits', 'desc').fetchAll()
    .then(items => {
      console.log(items);
      res.send(items);
    })
    .catch(err => {
      res.send('Error:', err);
    });
});

app.post('/search', (req, res) => {
  db.knex('items')
    .where('title', 'like', '%' + req.body.search + ' %')
    .orWhere('title', 'like', '% ' + req.body.search + '%')
    .orWhere('title', 'like', '% ' + req.body.search + ' %')
    .orWhere('title', '=', req.body.search)
    .then(items => {
      res.send(items);
    })
    .catch(err => {
      res.send('Error:', err)
    });
});

// item selling form routes
app.post('/sellItem', (req, res) => {
  new Item(req.body).save().then(() => res.status(200));
});

// ########################### FACEBOOK OAUTH ###########################
app.get('/auth/facebook',
  passport.authenticate('facebook'));
 
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/' }));

app.get('/signout' , (req, res) => {
  // check to see if this actually works
  req.session.destroy();
  res.redirect('/');
});

// check out passport-facebook documentation for info on how the FB OAuth works
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
    });
});

passport.use(new FacebookStrategy({
    // **you will need to create your own fb developer account and input your own clientID and clientSecret
    clientID: '523442607845905',
    clientSecret: '68d549f6999e92b32818e0993b737563',
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    enableProof: true,
    profileFields: ['id', 'displayName', 'gender', 'picture.type(large)', 'emails']
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      User.where({ facebookId: profile.id }).fetch()
        .then(function(user) {
          // creates user if not found
          if (!user) {
            user = new User({
              name: profile.displayName,
              facebookId: profile.id
              // TEMPORARY, SO TEST USERS CAN GET THROUGH -- WILL
              // email: profile.emails[0].value,
              // picture: profile.photos[0].value
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

// ######################## END FACEBOOK OAUTH ###########################
