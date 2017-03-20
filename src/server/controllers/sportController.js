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
			res.send(rows);
			console.log("Successfully added sport");
		}
		else {
			console.log(err);
			res.send(false);
			console.log("Error in adding sport");
		}
	});
}

exports.viewSport = (req,res) => {
	connection.query('SELECT * FROM sport WHERE sport_id = ?', [req.params.sport_id], function(err, rows, fields){
		if(!err) {
			res.send(rows[0]);
		}else{
			console.log(err);
		}
	});
}

exports.viewAllSport = (req,res) => {
	connection.query('SELECT * FROM sport', [], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
		}
	});
}

exports.updateSport = (req,res) => {
	connection.query('UPDATE sport SET name = ? WHERE sport_id = ?', [req.body.name,req.body.sport_id], function(err, rows, fields){
		if(!err) {
			res.send("Success");
		}else{
			console.log(err);
		}
	});
}

exports.deleteSport = (req,res) => {
	connection.query('DELETE FROM sport WHERE sport_id = ?', [req.body.sport_id], function(err, rows, fields){
		if(!err) {
			res.send("Success");
		}else{
			console.log(err);
		}
	});
}
