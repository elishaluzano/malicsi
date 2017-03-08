'use strict'

const express = require('express');
const session = require('express-session')
const mysql = require('mysql');
const bodyParser = require('body-parser');	

const app = express();

//server directory
app.use(express.static(__dirname + '/../client'));

var routes = require(__dirname + '/routes/routes.js');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

//sessions
app.use(session({
	secret: 'malICSi',
	resave: false,
	saveUninitialized: false,
	proxy: true
}));

app.use('/', routes);

app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/../client/index.html')
});

//listening on port 8000
app.listen(8000, function(){
	console.log('Server running at localhost:8000')
});
