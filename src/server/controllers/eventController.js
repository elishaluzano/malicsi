'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js');


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
			res.send(rows[0]);
			console.log("Successfully added event");
		}
		else {
			console.log(err);
			res.send(err);
			console.log("Error in adding event");
		}
	});
};

exports.viewEvent = (req,res) => {
	connection.query('SELECT * FROM event WHERE event_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows[0]);
		}else{
			res.send(err);
		}
	});
};

exports.viewAllEvent = (req,res) => {
	connection.query('SELECT * FROM event', [], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			res.send(err);
		}
	});
};

exports.searchEvent = (req,res) => {
	connection.query('SELECT * FROM event WHERE event_title LIKE ?', [ '%' + req.params.search + '%'], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			res.send(err);
		}
	});
};

exports.updateEvent = (req,res) => {
	connection.query('UPDATE event SET event_title = ?, venue = ?, start_date = ?, end_date = ? WHERE event_id = ?', [req.body.event_title, req.body.venue, req.body.start_date, req.body.end_date, req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows[0]);
			console.log("Success");
		}else{
			console.log(err);
			res.send(err);
		}
	});
};

exports.deleteEvent = (req,res) => {
	connection.query('DELETE FROM event WHERE event_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			console.log("Success");
			res.send({});
		}else{
			console.log(err);
			res.send(err);
		}
	});
};

exports.viewSportsInEvent = (req, res) => {
    connection.query('SELECT * FROM sport WHERE event_id_key = ?', [req.params.id], function(err, rows, fields){
        if (!err) {
            console.log("Success");
            res.send(rows);
        }
        else {
            console.log("Error");
            res.send(err);
        }
    });
};

exports.viewTeamsInEvent = (req, res) => {
    connection.query('SELECT * FROM team WHERE event_id_key = ?', [req.params.id], function(err, rows, fields){
        if (!err) {
            console.log("Success");
            res.send(rows);
        }
        else {
            console.log("Error");
            res.send(err);
        }
    });
};

exports.viewGamesInEvent = (req, res) => {
    connection.query('SELECT * FROM game WHERE sport_id_key IN (SELECT sport_id FROM sport WHERE event_id_key = ?)', [req.params.id], function(err, rows, fields){
        if (!err) {
            console.log("Success");
            res.send(rows);
        }
        else {
            console.log("Error");
            res.send(err);
        }
    });
};

exports.viewGamesInSportInEvent = (req, res) => {
    connection.query('SELECT * FROM game where sport_id_key = (select sport_id from sport where event_id_key = ? and sport_id = ?)', [req.params.event_id, req.params.sport_id], function(err, rows, fields){
        if (!err) {
            console.log("Success");
            res.send(rows);
        }
        else {
            console.log("Error");
            res.send(err);
        }
    });
};

