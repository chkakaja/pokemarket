// var User = require('./../db/models/user');
// var Message = require('./../db/models/message.js');
var MessageController = require('./../controllers/MessageController.js')
var UserController = require('./../controllers/UserController.js')

module.exports = function(app) {
  app.post('/getMessages', MessageController.getMessages);
  app.post('/sendMessage', MessageController.sendMessage);
  app.get('/getuserid', UserController.getUserId);
}