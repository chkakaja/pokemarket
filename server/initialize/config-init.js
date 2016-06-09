var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(express.static(__dirname + './../../client/static'));
  app.use(bodyParser()); 
}