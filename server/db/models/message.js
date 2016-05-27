var db = require('../config');

var Message = db.Model.extend({
  tableName: 'messages'
});

module.exports = Message;