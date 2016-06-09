var db = require('../initialize/db-init.js');

var Message = db.Model.extend({
  tableName: 'messages',
  hasTimestamps: true
});

module.exports = Message;