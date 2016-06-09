var db = require('../config');
var Bid = require('./bid');

var Item = db.Model.extend({

  tableName: 'items',
  hasTimestamps: true,

  bids: function() {
    return this.hasMany(Bid, 'item_id');
  },

  initialize: function() {
    this.on('saving', this.calcEndTime, this);
  },

  calcEndTime: function() {
    var createdAt = new Date(this.get('created_at'));
    var newEndAt = new Date(createdAt.setDate(createdAt.getDate() + Number(this.get('duration'))));
    this.set({ end_at: newEndAt });
  }

});

module.exports = Item;
