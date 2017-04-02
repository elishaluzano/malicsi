'use strict'

const mysql = require('mysql');
const connection = require('./../database.js');
    
exports.addGame = (req,res) => {
	var info = {
		venue: req.body.venue,
		time: req.body.time,
		min_num_of_players: req.body.min_num_of_players,
		max_num_of_players: req.body.max_num_of_players,
		status: req.body.status,
		event_id: req.body.event_id,
		sport_id: req.body.sport_id,
	};
	connection.query('INSERT INTO game SET ?', info, function(err, rows, fields) {
		if (!err) {
			res.send(info);
			console.log("Successfully added game");
		}
		else {
			console.log(err);
			res.send(false);
			console.log("Error in adding game");
		}
	});
};

exports.viewGame = (req,res) => {
	connection.query('SELECT * FROM game WHERE game_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows[0]);
		}else{
			console.log(err);
		}
	});
};

exports.viewAllGame = (req,res) => {
	connection.query('SELECT * FROM game', [], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
		}
	});
};

exports.updateGame = (req,res) => {
    var info = {
        game_id: req.params.id,
		venue: req.body.venue,
		time: req.body.time,
		min_num_of_players: req.body.min_num_of_players,
		max_num_of_players: req.body.max_num_of_players,
		status: req.body.status,
		event_id: req.body.event_id,
		sport_id: req.body.sport_id,
	};
	connection.query('UPDATE game SET venue = ?, time = ?, min_num_of_players = ?, max_num_of_players = ?, status = ? WHERE game_id = ?', [req.body.venue, req.body.time, req.body.min_num_of_players, req.body.max_num_of_players, req.body.status, req.params.id], function(err, rows, fields){
		if(!err) {
			console.log("Success");
			res.send(info);
		}else{
			console.log(err);
		}
	});
};

exports.deleteGame = (req,res) => {
	connection.query('call deleteGame(?)', [req.params.id], function(err, rows, fields){
		if(!err) {
			console.log("Success");
			res.send(null);
		}else{
			console.log(err);
		}
	});
};

exports.viewTeamsInGame = (req,res) => {
	connection.query('SELECT * FROM team JOIN teamPlaysGame ON team_id_play = team_id WHERE game_id_play = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
		}
	});
};
