const mysql = require('mysql');
const connection = require('./../database.js');


exports.addTeam = (req,res) =>{
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
}

exports.viewAllTeam = (req,res) => {
	connection.query('SELECT * FROM team',[], function(err, rows, fields){
		if (err) {
            console.log(err)
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully viewed all teams.");
        }
	});
}

exports.viewTeam = (req,res) => {
	connection.query('SELECT * FROM team WHERE event_id_key = ?', [ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows[0]);
            console.log("Successfully viewed a team.");
        }
	});
}

exports.updateTeam = (req,res) => {
	connection.query('UPDATE team SET name = ?, event_id_key = ? WHERE team_id = ?', [ req.body.name, req.body.event_id_key, req.body.team_id ], function(err, rows, fields){
		if (err) {
            console.log(err)
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully updated team.");
        }
	});
}

exports.deleteTeam = (req,res) => {
	connection.query('DELETE FROM team WHERE team_id = ?', [ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err)
            res.send(err);
         }
        else {
            res.send({});
            console.log("Successfully deleted a team.");
        }
	});
}

exports.getAllIsComposedOf = (req,res) => {
	connection.query('SELECT * FROM teamIsComposedOfUser',[], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully view all isComposedOf relations.");
        }
	});
}

exports.getIsComposedOf = (req,res) => {
	connection.query('SELECT * FROM teamIsComposedOfUser WHERE team_player_id = ?',[ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err)
            res.send(err);
         }
        else {
            res.send(rows);
        }
	});
}

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

}

exports.deleteIsComposedOf = (req,res) => {
	connection.query('DELETE FROM teamIsComposedOfUser WHERE team_player_id = ?', [ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send({});
            console.log("Successfully delete isComposedOf relation.");
        }
	});
}

exports.getAllPlays = (req, res) => {
	connection.query('SELECT * FROM teamPlaysGame', [], function(err, rows, fields) {
		if(!err) {
			res.send(rows);	
			console.log("Successfully retrieved all plays");
		} else {
			res.send(err);
			console.log("Error in retrieving all plays");
		}
	});
}

exports.getPlays = (req, res) => {
	connection.query('SELECT * FROM teamPlaysGame where team_id_play = ?', [ req.params.id ], function(err, rows, fields) {
		if(!err) {
			res.send(rows);	
			console.log("Successfully retrieved plays");
		} else {
			console.log("Error in retrieving plays");
			res.send(err);
		}
	});
}

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
}


exports.deletePlays = (req, res) => {
	connection.query('DELETE FROM teamPlaysGame where team_id_play = ?', [ req.params.id ], function(err, rows, fields) {
		if(!err) {
			res.send({});
			console.log("Successfully deleted plays");
		} else {
			res.send(err);
			console.log("Failed in deleting plays");
		}
	});
}

exports.getAllWins = (req, res) => {
	connection.query('SELECT * FROM teamWinsGame', [], function(err, rows, fields) {
		if(!err) {
			res.send(rows);	
			console.log("Successfully retrieved all wins");
		} else {
			console.log("Error in retrieving all wins");
			res.send(err);
		}
	});
}

exports.getWins = (req, res) => {
	connection.query('SELECT * FROM teamWinsGame where team_id_key = ?', [ req.params.id ], function(err, rows, fields) {
		if(!err) {
			res.send(rows);	
			console.log("Successfully retrieved wins");
		} else {
			console.log("Error in retrieving wins");
			res.send(err);
		}
	});
}

exports.addWins = (req, res) => {
	var newWins = {
		team_id_key: req.body.team_id,
		game_id_key: req.body.game_id
	};
	connection.query('INSERT INTO teamWinsGame SET ?', newWins, function(err, rows, fields) {
		if(!err) {
			res.send(rows);
			console.log("Successfully added wins");
		} else {
			console.log("Failed in adding wins");
			res.send(err);
		}
	});
}


exports.deleteWins = (req, res) => {
	connection.query('DELETE FROM teamWinsGame where team_id_key = ?', [ req.params.id ], function(err, rows, fields) {
		if(!err) {
			res.send({});
			console.log("Successfully deleted wins");
		} else {
			console.log("Error in deleting wins");
			res.send(err);
		}
	});
}