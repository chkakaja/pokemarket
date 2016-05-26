var db = require('../config');

var Feedback = db.Model.extend({

  tableName: 'feedbacks',
  hasTimestamps: true

});

module.exports = Feedback;
