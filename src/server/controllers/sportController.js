'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js')


exports.addSport = (req,res) => {
	var info = {
		name: req.body.name,
		event_id_key: req.body.institution_id_key,
	};
	connection.query('INSERT INTO sport SET ?', info, function(err, rows, fields) {
		if (!err) {
			res.send(rows[0]);
			console.log("Successfully added sport");
		}
		else {
			console.log(err);
			res.send(err);
			console.log("Error in adding sport");
		}
	});
}

exports.viewSport = (req,res) => {
	connection.query('SELECT * FROM SPORT WHERE sport_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows[0]);
		}else{
			console.log(err);
			res.send(err);
		}
	});
}

exports.viewAllSport = (req,res) => {
	connection.query('SELECT * FROM SPORT', [], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
			res.send(err);
		}
	});
}

exports.updateSport = (req,res) => {
	connection.query('UPDATE SPORT SET name = ? WHERE sport_id = ?', [req.body.name,req.params.id], function(err, rows, fields){
		if(!err) {
			console.log("Success");
			res.send(rows[0]);
		}else{
			console.log(err);
			res.send(err);
		}
	});
}

exports.deleteSport = (req,res) => {
	connection.query('DELETE FROM SPORT WHERE sport_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			console.log("Success");
			res.send({});
		}else{
			console.log(err);
			res.send(err);
		}
	});
}
