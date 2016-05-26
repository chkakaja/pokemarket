var session = require('express-session');
var express = require('express');
var app = express();
var db = require('./db/config');
var route = require('/routes');

app.use(express.static(__dirname + '/public'));

app.listen(3000);