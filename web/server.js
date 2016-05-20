"use strict";

var express = require('express');
var morgan  = require('morgan');
var bodyParser = require('body-parser');

var app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/static/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use('/', function(req, res) {
    res.sendFile(__dirname + '/static/public/index.html');
});

app.use(function(req, res, next) {
    //TODO: check if the user is authenticated with req.isAuthenticated
    next();
});

app.use(express.static(__dirname + '/static/secure'));

//start the server
app.listen(80, function() {
    console.log("Server listening on port 80...");
});