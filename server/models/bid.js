var db = require('../initialize/db-init.js');

var Bid = db.Model.extend({

  tableName: 'bids',
  hasTimestamps: true

});

module.exports = Bid;
