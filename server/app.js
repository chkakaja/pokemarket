var session = require('express-session');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
var db = require('./db/config');
// var route = require('/routes');
console.log(__dirname);
app.use(express.static(__dirname + '/../public'));
var Message = require('./db/models/message.js');


app.post('/getMessages', (req, res) => {
  new Message().fetchAll().then(messages => res.status(200).send(messages));
});

app.post('/sendMessage', (req, res) => {
  console.log(req.body);
  new Message(req.body).save().then(() => res.status(200));
})
app.listen(3000);