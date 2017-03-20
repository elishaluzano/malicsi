'use strict'

const mysql = require('mysql');
const connection = require('./../database.js')

exports.getAllPlays = (req, res) => {
	connection.query('SELECT * FROM plays', [], function(err, rows, fields) {
		if(!err) {
			res.send(rows);	
			console.log("Successfully retrieved all plays");
		} else {
			console.log("Error in retrieving all plays");
		}
	});
}

exports.getPlays = (req, res) => {
	connection.query('SELECT * FROM plays where team_id_play = ?', [ req.params.id ], function(err, rows, fields) {
		if(!err) {
			res.send(rows);	
			console.log("Successfully retrieved plays");
		} else {
			console.log("Error in retrieving plays");
		}
	});
}

exports.addPlays = (req, res) => {
	var newPlay = {
		team_id_play: req.body.team_id,
		game_id_play: req.body.game_id
	};
	connection.query('INSERT INTO plays SET ?', newPlay, function(err, rows, fields) {
		if(!err) {
			res.send(rows);
			console.log("Successfully added plays");
		} else {
			console.log("Failed in adding plays");
		}
	});
}


exports.removePlays = (req, res) => {
	connection.query('DELETE FROM plays where team_id_play = ?', [ req.params.id ], function(err, rows, fields) {
		if(!err) {
			console.log("Successfully deleted plays");
		} else {
			console.log("Failed in deleting plays");
		}
	});
}

exports.getAllWins = (req, res) => {
	connection.query('SELECT * FROM wins', [], function(err, rows, fields) {
		if(!err) {
			res.send(rows);	
			console.log("Successfully retrieved all wins");
		} else {
			console.log("Error in retrieving all wins");
		}
	});
}

exports.getWins = (req, res) => {
	connection.query('SELECT * FROM wins where team_id_key = ?', [ req.params.id ], function(err, rows, fields) {
		if(!err) {
			res.send(rows);	
			console.log("Successfully retrieved wins");
		} else {
			console.log("Error in retrieving wins");
		}
	});
}

exports.addWins = (req, res) => {
	var newWins = {
		team_id_key: req.body.team_id,
		game_id_key: req.body.game_id
	};
	connection.query('INSERT INTO wins SET ?', newWins, function(err, rows, fields) {
		if(!err) {
			res.send(rows);
			console.log("Successfully added wins");
		} else {
			console.log("Failed in adding wins");
		}
	});
}


exports.removeWins = (req, res) => {
	connection.query('DELETE FROM wins where team_id_key = ?', [ req.params.id ], function(err, rows, fields) {
		if(!err) {
			console.log("Successfully deleted wins");
		} else {
			console.log("Error in deleting wins");
		}
	});
}
