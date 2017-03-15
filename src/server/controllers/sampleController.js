const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js')


/*
EXAMPLE 

exports.getSomething = (req,res) => {
	connection.query('SELECT * FROM ___ WHERE = ?', [req.body.___], function(err, rows, fields){
		res.send(rows);
	});
}
exports.postSomething = (req,res) => {
	connection.query('INSERT INTO __(_,_) VALUES(_,_) ', [req.body.__,req.body.__], function(err, rows, fields){
		res.send(rows);
	});
}*/

exports.getAccount = (req, res) => {
  res.send(req.session.user);
}
