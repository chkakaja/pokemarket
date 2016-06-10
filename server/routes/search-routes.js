// var db = require('./../db/config');
var SearchController = require('./../controllers/SearchController.js')

module.exports = function(app) {
  app.post('/search', SearchController.search);
}