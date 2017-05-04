'use strict'

const mysql = require('mysql');
const connection = require('./../database.js');

exports.viewAllGamelogs = (req,res) => {
	connection.query('SELECT * FROM gameUpdateLog join team on gameUpdateLog.team_id = team.team_id', [], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
		}
	});
};

exports.viewGamelogsOfGame = (req,res) => {
	connection.query('SELECT * FROM gameUpdateLog join team on gameUpdateLog.team_id = team.team_id where game_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
		}
	});
};

exports.viewGamelog = (req,res) => {
	connection.query('SELECT * FROM gameUpdateLog join team on gameUpdateLog.team_id = team.team_id where gameUpdateLog_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
		}
	});
};


exports.addGameLog = (req, res) => {
    var gamelog = {
        team_id : req.body.team_id,
        game_id : req.body.game_id,
        score : req.body.score
    };
    connection.query('call gameUpdate(?,?,?)', [req.body.team_id, req.body.game_id, req.body.score], function(err, rows, fields){
		if(!err) {
			connection.query('select max(gameUpdateLog_id) as id from gameUpdateLog', [], function(err, result){
				if(!err){
					gamelog.gameUpdateLog_id = result[0].id;
					gamelog.time = new Date();
					res.send(gamelog);
				}
				else{
					console.log(err);
				}
			});
		}else{
			console.log(err);
		}
	});
};


exports.updateGameLog = (req, res) => {
    var gamelog = {
        gameUpdateLog_id : req.params.id,
        team_id : req.body.team_id,
        prev_team_id: req.body.prev_team_id,
        game_id : req.body.game_id,
        score : req.body.score,
        prev_score : req.body.prev_score
    };

    if(gamelog.team_id == gamelog.prev_team_id){
    	connection.query('call editGameLog(?,?,?,?,?)', [req.params.id, req.body.team_id, req.body.game_id, req.body.score, req.body.prev_score], function(err, rows, fields){
			if(!err) {
				res.send(gamelog);
			}else{
				console.log(err);
			}
		});
    }
    else{
		if(gamelog.team_id != gamelog.prev_team_id){
			connection.query('call editGameLogNewTeam(?,?,?,?,?,?)', [req.params.id, req.body.team_id, req.body.prev_team_id, req.body.game_id, req.body.score, req.body.prev_score], function(err, rows, fields){
				if(!err) {
					res.send(gamelog);
					console.log("ok");
				}else{
					console.log(err);
				}
			});
		}
    }
    
};


exports.deleteGameLog = (req, res) => {
    connection.query('call deleteGameLog(?, ?, ?,?)', [req.params.id,req.body.team_id, req.body.game_id,req.body.prev_score], function(err, rows, fields){
		if(!err) {
			res.send(null);
		}else{
			console.log(err);
		}
	});
};

exports.gameUpdate = (req, res) => {
    
    
}