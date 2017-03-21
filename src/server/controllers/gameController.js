'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js')

    
exports.addGame = (req,res) => {
	var info = {
		venue: req.body.venue,
		time: req.body.time,
		min_num_of_players: req.body.min_num_of_players,
		max_num_of_players: req.body.max_num_of_players,
		status: req.body.status,
		sport_id_key: req.body.sport_id_key,
	};
	connection.query('INSERT INTO game SET ?', info, function(err, rows, fields) {
		if (!err) {

			res.send(rows);
			console.log("Successfully added game");
		}
		else {
			console.log(err);
			res.send(false);
			console.log("Error in adding game");
		}
	});
}

exports.viewGame = (req,res) => {
	connection.query('SELECT * FROM game WHERE game_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows[0]);
		}else{
			console.log(err);
		}
	});
}

exports.viewAllGame = (req,res) => {
	connection.query('SELECT * FROM game', [], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
		}
	});
}

exports.updateGame = (req,res) => {
	connection.query('UPDATE game SET venue = ?, time = ?, min_num_of_players = ?, max_num_of_players = ?, status = ? WHERE = ?', [req.body.venue, req.body.time, req.body.min_num_of_players, req.body.max_num_of_players, req.body.status, req.params.id], function(err, rows, fields){
		if(!err) {
			console.log("Success");
			res.send(rows[0]);
		}else{
			console.log(err);
		}
	});
}

exports.deleteGame = (req,res) => {
	connection.query('DELETE FROM game WHERE game_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			console.log("Success");
			res.send({});
		}else{
			console.log(err);
		}
	});
}
