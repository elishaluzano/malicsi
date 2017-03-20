'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js')


exports.addEvent = (req,res) => {
	var info = {
		event_title: req.body.event_title,
		venue: req.body.venue,
		start_date: req.body.start_date,
		end_date: req.body.end_date,
		institution_id_key: req.body.institution_id_key,
	};
	connection.query('INSERT INTO event SET ?', info, function(err, rows, fields) {
		if (!err) {
			res.send(rows);
			console.log("Successfully added event");
		}
		else {
			console.log(err);
			res.send(false);
			console.log("Error in adding event");
		}
	});
}

exports.viewEvent = (req,res) => {
	connection.query('SELECT * FROM event WHERE event_id = ?', [req.params.event_id], function(err, rows, fields){
		if(!err) {
			res.send(rows[0]);
		}else{
			console.log(err);
		}
	});
}

exports.viewAllEvent = (req,res) => {
	connection.query('SELECT * FROM event', [], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
		}
	});
}

exports.updateEvent = (req,res) => {
	connection.query('UPDATE event SET event_title = ?, venue = ?, start_date = ?, end_date = ? WHERE event_id = ?', [req.body.event_title, req.body.venue, req.body.start_date, req.body.end_date, req.body.event_id], function(err, rows, fields){
		if(!err) {
			res.send("Success");
		}else{
			console.log(err);
		}
	});
}

exports.deleteEvent = (req,res) => {
	connection.query('DELETE FROM event WHERE event_id = ?', [req.body.event_id], function(err, rows, fields){
		if(!err) {
			res.send("Success");
		}else{
			console.log(err);
		}
	});
}
