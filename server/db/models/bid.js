var db = require('../config');

var Bid = db.Model.extend({

  tableName: 'bids',
  hasTimestamps: true

});

module.exports = Bid;
