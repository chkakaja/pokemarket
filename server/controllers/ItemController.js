var Item = require('../models/item.js');
var WatchList = require('../models/watchlist.js');
var User = require('../models/user.js');
var db = require('../initialize/db-init.js');

module.exports = {
  getUserFacebookId: (req, res) => {
    if (req.session.passport) {
      res.send(req.session.passport.user);
    } else {
      res.send();
    }
  },

  getItemSeller: (req, res) => {
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
  },

  updateBid:  (req, res) => {
    Item.where({ id: req.body.id }).fetch()
      .then(function(item) {
        if (req.body.newBid > item.attributes.currentBid) {
          item.set({ currentBid: req.body.newBid }).save();
          item.set({ current_bidder: req.body.currentBidder }).save();
        }
        res.send(item.attributes);
      })
      .catch(function(err) {
        res.send('Error:', err);
      })
  },

  addVisit: (req, res) => {
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
  },

  watchedItems: (req, res) => {
    db.knex('watchlists')
      .where({ user_id: req.query.user_id })
      .innerJoin('items', 'items.id', '=', 'watchlists.item_id')
      .then(items => {
        res.send(items);
      })
      .catch(err => {
        res.send('Error:', err);
      });
  },

  listedItems: (req, res) => {
    Item.where({ seller_id: req.query.user_id }).fetchAll()
      .then(items => {
        res.send(items);
      })
      .catch(err => {
        res.send('Error:', err);
      });
  },

  popularItems: (req, res) => {
    Item.forge().orderBy('visits', 'desc').fetchAll()
      .then(items => {
        console.log(items);
        res.send(items);
      })
      .catch(err => {
        res.send('Error:', err);
      });
  },

  sellItem: (req, res) => {
    new Item(req.body).save().then(() => res.status(200));
  }

}
