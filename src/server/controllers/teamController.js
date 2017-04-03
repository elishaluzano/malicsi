const mysql = require('mysql');
const connection = require('./../database.js');


exports.addTeam = (req,res) => {
	var team = {
		name : req.body.name,
		picture : (req.file)? req.file.path.substring(req.file.path.indexOf('dist/')).replace('dist', '') : '',
		event_id_key : req.body.event_id_key
	};
	connection.query('INSERT INTO team SET ?', team, function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            team.team_id = rows.insertId;
            res.send(team);
            console.log("Successfully added a team");
        }
	});
};
exports.viewAllTeam = (req,res) => {
	connection.query('SELECT * FROM team',[], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully viewed all teams.");
        }
	});
};

exports.viewTeam = (req,res) => {
	connection.query('SELECT * FROM team WHERE team_id = ?', [ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows[0]);
            console.log("Successfully viewed a team.");
        }
	});
};

exports.searchTeam = (req,res) => {
	connection.query('SELECT * FROM team WHERE name LIKE ?', [ '%' + req.params.search + '%' ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully viewed a team.");
        }
	});
};

exports.updateTeam = (req,res) => {
    	var team = {
    	team_id : req.params.id,
		name : req.body.name,
		picture : (typeof req.file != 'undefined') ? req.file.path.substring(req.file.path.indexOf('dist/')).replace('dist', '') : req.file,
		event_id_key : req.body.event_id_key
	};
	connection.query('UPDATE team SET name = ?, picture = ?, event_id_key = ? WHERE team_id = ?', [ req.body.name, (typeof req.file != 'undefined') ? req.file.path.substring(req.file.path.indexOf('dist/')).replace('dist', '') : req.file, req.body.event_id_key, req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(team);
            console.log("Successfully updated team.");
        }
	});
};

exports.deleteTeam = (req,res) => {
	connection.query('DELETE FROM team WHERE team_id = ?', [ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(null);
            console.log("Successfully deleted a team.");
        }
	});
};

exports.getAllIsComposedOf = (req,res) => {
	connection.query('SELECT * FROM teamIsComposedOfUser JOIN user ON user_id = user_player_id',[], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully view all isComposedOf relations.");
        }
	});
};

exports.getIsComposedOf = (req,res) => {
	connection.query('SELECT * FROM teamIsComposedOfUser JOIN user ON user_id = user_player_id WHERE team_player_id = ?',[ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
        }
	});
};

exports.addIsComposedOf = (req, res) => {
	var relation = {
		team_player_id : req.body.team_player_id,
		user_player_id : req.body.user_player_id
	};
	connection.query('INSERT INTO teamIsComposedOfUser SET ?', relation, function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(relation);
            console.log("Successfully add a isComposedOf relation.");
        }
	});

};

exports.deleteIsComposedOf = (req,res) => {
	connection.query('DELETE FROM teamIsComposedOfUser WHERE team_player_id = ?', [ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(null);
            console.log("Successfully delete isComposedOf relation.");
        }
	});
};

exports.getAllPlays = (req, res) => {
	connection.query('SELECT * FROM teamPlaysGame JOIN game ON game_id_play = game_id', [], function(err, rows, fields) {
		if(!err) {
			res.send(rows);
			console.log("Successfully retrieved all plays");
		} else {
			res.send(err);
			console.log("Error in retrieving all plays");
		}
	});
};

exports.getPlays = (req, res) => {
	connection.query('SELECT * FROM teamPlaysGame JOIN game ON game_id_play = game_id WHERE teamPlaysGame.team_id_play = ?', [ req.params.id ], function(err, rows, fields) {
		if(!err) {
			res.send(rows);
			console.log("Successfully retrieved plays");
		} else {
			console.log("Error in retrieving plays");
			res.send(err);
		}
	});
};

exports.addPlays = (req, res) => {
	var newPlay = {
		team_id_play: req.body.team_id,
		game_id_play: req.body.game_id
	};
	connection.query('INSERT INTO teamPlaysGame SET ?', newPlay, function(err, rows, fields) {
		if(!err) {
			res.send(newPlay);
			console.log("Successfully added plays");
		} else {
			res.send(err);
			console.log("Failed in adding plays");
		}
	});
};


exports.deletePlays = (req, res) => {
	connection.query('DELETE FROM teamPlaysGame where team_id_play = ? and game_id_play = ?', [ req.params.id, req.params.game ], function(err, rows, fields) {
		if(!err) {
			res.send(null);
			console.log("Successfully deleted plays");
		} else {
			res.send(err);
			console.log("Failed in deleting plays");
		}
	});
};


exports.getAllGameInfo = (req, res) => {
	connection.query('select timestampdiff(second, curdate(), g.time) as datediff, t.name as team_name, g.time, e.event_title, s.name as sport, tpg2.score as team2_score, tpg1.score as team1_score, v.name as venue from team t join teamPlaysGame tpg1 join teamPlaysGame tpg2 join sport s join event e join game g join venue v where tpg1.team_id_play=? and t.team_id = tpg2.team_id_play and g.game_id = tpg2.game_id_play and g.event_id=e.event_id and g.sport_id=s.sport_id  and tpg1.game_id_play = tpg2.game_id_play and v.venue_id = g.venue and tpg1.team_id_play != tpg2.team_id_play', [ req.params.id ], function(err, rows, fields) {
		if(!err) {
			res.send(rows);
			console.log("Successfully got game information");
		} else {
			res.send(err);
			console.log("Failed in getting game information");
		}
	});
};


exports.updatePlays = (req, res) => {
    var newPlay = {
        record: req.body.record,
		team_id_play: req.params.team_id,
		game_id_play: req.params.game_id
	};
    connection.query('UPDATE teamPlaysGame SET record = ? where team_id_play = ? and game_id_play = ?', [ req.body.record, req.params.team_id, req.params.game_id ], function(err, rows, fields) {
        if(!err) {
			res.send(newPlay);
			console.log("Successfully updated the record");
		} else {
			res.send(err);
			console.log("Failed in updating the record");
		}
    });
};
