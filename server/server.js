if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({path: './env/development.env'});
} else if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({path: './env/production.env'});
}

var express = require('express');
var passport = require('passport');

var app = express();

require('./initialize/config-init.js')(app, express);
require('./initialize/db-init.js');
require('./initialize/auth-init.js')(app, express, passport);

// ########################### SOCKET.IO CODE ###########################

var http = require('http').Server(app);
exports.io = require('socket.io')(http);

app.use(express.static(__dirname + '/../public'));

http.listen(process.env.PORT, function(){
  console.log('listening on port:' + process.env.PORT);
});

require('./socket.js');

// ######################### END SOCKET.IO CODE #########################

app.get('/haggle', function(req, res) {
  res.render('haggle');
});

require('./routes/auth-routes.js')(app, passport);
app.use(require('./lib/ensureAuthenticated.js'));
require('./routes/view-routes.js')(app);

require('./routes/profile-routes.js')(app);
require('./routes/feedback-routes.js')(app);
require('./routes/message-routes.js')(app);
require('./routes/search-routes.js')(app);
require('./routes/item-routes.js')(app);
require('./routes/payment-routes.js')(app);

app.get('/*', function(req, res) {
  res.redirect('/');
})
