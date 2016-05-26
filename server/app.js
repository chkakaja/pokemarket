var session = require('express-session');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
// var db = require('./db/config');
// var route = require('/routes');
console.log(__dirname);
app.use(express.static(__dirname + '/../public'));

var messages = [{ message: 'abc' }, { message: 'abcd' }, {message: 'abcde'}];
app.post('/getMessages', (req, res) => {
  res.status(200).send(messages);
});
app.post('/sendMessage', (req, res) => {
  messages.push(req.body);
  console.log(req.body);
  res.status(200);
})
app.listen(3000);