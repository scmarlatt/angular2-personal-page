'use strict';

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static('/Users/scottmarlatt/Documents/Code/angular2.0/angular2-personal-page/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('*', function(req,res) {
    res.sendFile(path.resolve('/Users/scottmarlatt/Documents/Code/angular2.0/angular2-personal-page/app/html/index.html'));
});
/*
app.get('*', function(req, res) {
	console.log('Request made');
});
*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});