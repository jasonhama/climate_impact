'use strict';

var express = require('express');
var morgan  = require('morgan');
var bodyParser = require('body-parser');
var session    = require('express-session');
var RedisStore = require('connect-redis')(session);
var passport = require('passport');

var cookieSigSecret = process.env.COOKIE_SIG_SECRET;
if (!cookieSigSecret) {
    console.error('Please set COOKIE_SIG_SECRET');
    process.exit(1);
}

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session({
    secret: cookieSigSecret,
    resave: false,
    saveUninitialized: false,
    store: new RedisStore()
}));

app.use(passport.initialize()); //add authentication to the app
app.use(passport.session());    //add session support to the app

app.use(express.static(__dirname + '/static/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use(function(req, res, next) {
   //TODO: check if the user is authenticated with req.isAuthenticated
   next(); 
});

app.use(express.static(__dirname + '/static/secure'));

//start the server
app.listen(80, function() {
   console.log("Server listening on port 80..."); 
});