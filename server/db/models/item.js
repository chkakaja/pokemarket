var db = require('../config');
var Bid = require('./bid');

var Item = db.Model.extend({

  tableName: 'items',
  hasTimestamps: true,

  bids: function() {
    return this.hasMany(Bid, 'item_id');
  }

});

module.exports = Item;
