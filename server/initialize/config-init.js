var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

module.exports = function(app, express) {
  app.engine('handlebars', exphbs({defaultLayout: 'single', extname: '.hbs'}));
  app.set('view engine', 'handlebars');
  app.set('views', path.join(__dirname, '../templates'));

  app.use(express.static(__dirname + './../../public'));
  app.use(bodyParser()); 
};