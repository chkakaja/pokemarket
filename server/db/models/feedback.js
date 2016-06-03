var db = require('../config');

var Feedback = db.Model.extend({

  tableName: 'feedback',
  hasTimestamps: true

});

module.exports = Feedback;
