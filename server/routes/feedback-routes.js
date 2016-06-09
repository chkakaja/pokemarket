// var db = require('./../db/config');
// var Feedback = require('./../db/models/feedback.js');
// var User = require('./../db/models/user');
// var Item = require('./../db/models/item');
var FeedbackController = require('./../controllers/FeedbackController.js')

module.exports = function(app) {
  app.get('/feedback', FeedbackController.getFeedback);
  app.get('/toleavefeedback', FeedbackController.toLeaveFeedback);
  app.post('/leavefeedback', FeedbackController.newFeedback);
};