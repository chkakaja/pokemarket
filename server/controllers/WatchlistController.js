var WatchList = require('./../db/models/watchlist.js');
var Message = require('./../db/models/message.js');
var User = require('./../db/models/user.js');
var db = require('./../db/config.js');

module.exports = {
  watchItem: (req, res) => {
    WatchList.where({ user_id: req.query.user_id, item_id: req.query.item_id }).fetch()
      .then(function(result) {
        if (result === null) {
          new WatchList(req.query).save().then(() => res.send(req.query.item_id));
        } else {
          result.destroy();
          res.send('Unwatched item');
        }
      })
      .catch(function(err) {
        res.send('Error:', err);
      });
  }

}