'use strict'

const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
<<<<<<< HEAD
const bodyParser = require('body-parser');	
const path = require('path');
=======
const bodyParser = require('body-parser');
const path = require('path');	
>>>>>>> f19126bc4daf9f7494f65580421f685e15d08d44

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

app.get('/*', function(req, res) {
<<<<<<< HEAD
	res.sendFile(__dirname + './../../dist/index.html')
=======
	res.sendFile(path.resolve('./../../dist/index.html'));
>>>>>>> f19126bc4daf9f7494f65580421f685e15d08d44
});


//listening on port 8000
app.listen(8000, function(){
	console.log('Server running at localhost:8000');
});
