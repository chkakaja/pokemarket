// var db = require('./../db/config');
var SearchController = require('./../controllers/SearchController.js')


module.exports = function(app) {
  app.post('/search', SearchController.search);
  //   (req, res) => {
  //   db.knex('items')
  //     .where('title', 'like', '%' + req.body.search + ' %')
  //     .orWhere('title', 'like', '% ' + req.body.search + '%')
  //     .orWhere('title', 'like', '% ' + req.body.search + ' %')
  //     .orWhere('title', '=', req.body.search)
  //     .then(items => {
  //       console.log(items);
  //       res.send(items);
  //     })
  //     .catch(err => {
  //       res.send('Error:', err)
  //     });
  // });
}