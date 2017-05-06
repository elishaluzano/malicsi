'use strict'

const mysql = require('mysql');
const connection = require('./../database.js');
    
exports.addGame = (req,res) => {
	var info = {
		time: req.body.time,
		min_num_of_players: req.body.min_num_of_players,
		max_num_of_players: req.body.max_num_of_players,
		status: req.body.status,
        venue: req.body.venue,
		event_id: req.body.event_id,
		sport_id: req.body.sport_id
	};
	connection.query('INSERT INTO game SET ?', info, function(err, rows, fields) {
		if (!err) {
		    info.game_id = rows.insertId;
			res.send(info);
			console.log("Successfully added game");
		}
		else {
			console.log(err);
			res.send(null);
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
		time: req.body.time,
		min_num_of_players: req.body.min_num_of_players,
		max_num_of_players: req.body.max_num_of_players,
		status: req.body.status,
        venue: req.body.venue,
		event_id: req.body.event_id,
		sport_id: req.body.sport_id
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
	connection.query('DELETE FROM game WHERE game_id = ?', [req.params.id], function(err, rows, fields){
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

exports.viewGamesInformation = (req,res) => {
	connection.query('select g.game_id, g.status, g.time, e.event_title, e.event_id, sp.name as sport, sp.sport_id as sport_id, s.name as sponsor, v.name as venue, s.institution_id as sponsor_id from game g join event e join sport sp join sponsoringInstitution s join venue v on sp.sport_id = g.sport_id and g.event_id = e.event_id and s.institution_id = e.institution_id_key and v.venue_id = g.venue', [], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
		}
	});
};

exports.endGame = (req, res) => {
    connection.query('UPDATE game set status = "FINISHED" where game_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
		}
	});
};

exports.openGame = (req, res) => {
    connection.query('UPDATE game set status = "ONGOING" where game_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
		}
	});
};

//sets the record in teamPlaysGame
exports.setRecord = (req, res) => {
    
    connection.query('call setRecord(?,?,?)',[req.params.game_id, req.body.team1_id, req.body.team2_id], function(err, rows, fields) {
        if(!err) {
            res.send(true);
            console.log(req.body);
        }
        else {
            console.log(err);
        }
    });
};

exports.setDrawRecord = (req, res) => {
    
    connection.query('call setDrawRecord(?)',[req.params.game_id], function(err, rows, fields) {
        if(!err) {
            res.send(true);
        }
        else {
            console.log(err);
        }
    });
};


exports.openRecord = (req, res) => {
    
    connection.query('call openRecord(?)',[req.params.game_id], function(err, rows, fields) {
        if(!err) {
            res.send(true);
        }
        else {
            console.log(err);
        }
    });
};