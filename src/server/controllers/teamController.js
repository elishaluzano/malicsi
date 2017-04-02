const mysql = require('mysql');
const connection = require('./../database.js');


exports.addTeam = (req,res) => {
	var team = {
		name : req.body.name,
		event_id_key : req.body.event_id_key
	};
	connection.query('INSERT INTO team SET ?', team, function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
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
	connection.query('UPDATE team SET name = ?, event_id_key = ? WHERE team_id = ?', [ req.body.name, req.body.event_id_key, req.params.team_id ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
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
            res.send(rows);
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
			res.send(rows);
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

exports.updatePlays = (req, res) => {
    connection.query('UPDATE teamPlaysGame SET record = ? where team_id_play = ? and game_id_play = ?', [ req.body.record, req.params.team_id, req.params.game_id ], function(err, rows, fields) {
        if(!err) {
			res.send(rows[0]);
			console.log("Successfully updated the record");
		} else {
			res.send(err);
			console.log("Failed in updating the record");
		}
    });
};
