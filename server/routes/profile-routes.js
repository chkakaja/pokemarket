// var User = require('./../db/models/user');
var UserController = require('./../controllers/UserController.js')



module.exports = function(app) {
 app.get('/getprofile', UserController.getProfile);
}