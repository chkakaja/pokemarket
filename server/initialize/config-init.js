var bodyParser = require('body-parser');
var exphbs = require('ejs');
var path = require('path');
var morgan = require('morgan');

module.exports = function(app, express) {
  app.use(morgan('dev'));

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, './../views'));

  app.use(express.static(__dirname + './../../public'));
  app.use(bodyParser()); 
};