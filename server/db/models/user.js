var db = require('../config');
var Bid = require('./bid');
var Item = require('./item');
var Message = require('./message');
var Feedback = require('./feedback');
var Watchlist = require('./watchList');
var _ = require('underscore');

var User = db.Model.extend({

  tableName: 'users',
  hasTimestamps: true,

  bids: function() {
    return this.hasMany(Bid, 'user_id');
  },

  messagesTo: function() {
    return this.hasMany(Message, 'user_to');
  },

  messagesFrom: function() {
    return this.hasMany(Message, 'user_from');
  },

  itemsSelling: function() {
    return this.hasMany(Item, 'seller_id');
  },

  itemsWatching: function() {
    return this.hasMany(WatchList, 'user_id');
  },

  feedbacksGiven: function() {
    return this.hasMany(Feedback, 'author_id');
  },

  feedbacksReceived: function() {
    return this.hasMany(Feedback, 'receiver_id');
  }

});

module.exports = User;
