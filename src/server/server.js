'use strict'

const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//server directory
app.use(express.static(__dirname + '/../../dist'));

var routes = require(__dirname + '/routes/routes.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//sessions
app.use(session({
	secret: 'malicsi',
	resave: false,
	saveUninitialized: false,
	proxy: true
}));

app.use('/', routes);
//index page
app.get('/', function(req, res) {
	res.sendFile(path.resolve('index.html'));
});
//about page
app.get('/betelog', function(req, res) {
	res.sendFile(path.resolve('betelog.html'));
});
//404 error page
app.get('*', function(req, res) {
    console.log(req.url);
	res.sendFile(path.resolve('404.html'));
});

//listening on port 8000
app.listen(8000, function(){
	console.log('Server running at localhost:8000');
});
