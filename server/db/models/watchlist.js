var db = require('../config');

var WatchList = db.Model.extend({

  tableName: 'watchLists',
  hasTimestamps: true,

});

module.exports = WatchList;
