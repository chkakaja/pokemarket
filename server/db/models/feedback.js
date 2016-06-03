var db = require('../config.js');
var User = require('./user.js');

var Feedback = db.Model.extend({

  tableName: 'feedback',
  hasTimestamps: true,

  author: function() {
    return this.belongsTo(User, 'author_id');
  }

});

module.exports = Feedback;
