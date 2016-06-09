var db = require('../initialize/db-init.js');

var WatchList = db.Model.extend({

  tableName: 'watchLists',
  hasTimestamps: true,

});

module.exports = WatchList;
