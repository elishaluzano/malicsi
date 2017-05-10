'use strict'

const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const connection = require(__dirname + '/database.js');

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

app.get('/betelog', function(req, res) {
	res.sendFile(path.resolve('./dist/betelog.html'));
});
app.use('/', routes);
//index page
app.get('/', function(req, res) {
	res.sendFile(path.resolve('index.html'));
});
//about page
//404 error page
app.get('*', function(req, res) {
    console.log(req.url);
	res.sendFile(path.resolve('404.html'));
});

setInterval(function(){ 
    connection.query('UPDATE game SET status = "ONGOING" WHERE status = "PENDING" AND time <= now()', function(err, rows) {
        console.log(rows);
    }); 
}, (1000 * 60 * 5));

//listening on port 8000
var port = process.env.PORT || 8000;
app.listen(port, function(){
	console.log('Server running at localhost:', port);
});
