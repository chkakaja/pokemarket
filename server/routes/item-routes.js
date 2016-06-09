// var db = require('./../db/config');
// var User = require('./../db/models/user');
// var Item = require('./../db/models/item');
// var WatchList = require('./../db/models/watchlist');
var UserController = require('./../controllers/UserController.js')
var ItemController = require('./../controllers/ItemController.js')
var WatchListController = require('./../controllers/WatchlistController.js')

module.exports = function(app) {
  app.get('/getuserfacebookid', ItemController.getUserFacebookId);
  app.get('/getItemSeller', ItemController.getItemSeller);
  app.post('/updateBid', ItemController.updateBid);
  app.get('/watchitem', WatchListController.watchItem);
  app.post('/addvisit', ItemController.addVisit);
  app.get('/getWatchedItems', ItemController.watchedItems);
  app.get('/getListedItems', ItemController.listedItems);
  app.get('/getPopularItems', ItemController.popularItems);
  app.post('/sellItem', ItemController.sellItem);
}