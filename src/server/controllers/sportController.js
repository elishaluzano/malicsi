'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js')


exports.addSport = (req,res) => {
	var info = {
		name: req.body.name,
		event_id_key: req.body.event_id_key
	};
	connection.query('INSERT INTO sport SET ?', info, function(err, rows, fields) {
		if (!err) {
			res.send(rows[0]);
			console.log("Successfully added sport");
		}
		else {
			console.log(err);
			res.send(err);
			console.log("Error in adding sport");
		}
	});
}

exports.viewSport = (req,res) => {
	connection.query('SELECT * FROM sport WHERE sport_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows[0]);
		}else{
			console.log(err);
			res.send(err);
		}
	});
}

exports.viewAllSport = (req,res) => {
	connection.query('SELECT * FROM sport', [], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
			res.send(err);
		}
	});
}

exports.updateSport = (req,res) => {
	connection.query('UPDATE sport SET name = ? WHERE sport_id = ?', [req.body.name,req.params.id], function(err, rows, fields){
		if(!err) {
			console.log("Success");
			res.send(rows[0]);
		}else{
			console.log(err);
			res.send(err);
		}
	});
}

exports.deleteSport = (req,res) => {
	connection.query('DELETE FROM sport WHERE sport_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			console.log("Success");
			res.send({});
		}else{
			console.log(err);
			res.send(err);
		}
	});
}

//post join relation
exports.addJoin = (req, res) => {
	var info = {
		user_id : req.body.user_id,
		sport_id : req.body.sport_id
<<<<<<< HEAD
	}
=======
	};
>>>>>>> 1407cf627d758a71081a1559215ee3f50f1b2b16
	connection.query('INSERT into SportIsJoinedByUser SET ?', info, function(err, rows, fields) {
		if (!err) {
			console.log("Success");
			res.send(rows[0]);
		}
		else {
			console.log("Error");
			res.send(err);
		}
	});
}
//get all join relations
exports.getAllJoins = (req, res) => {
	connection.query('SELECT * FROM sportIsJoinedByUser', [], function(err, rows, fields) {
		if (!err) {
			console.log("Success");
			res.send(rows);
		}
		else {
			console.log("Error");
			res.send(err);
		}
	});
}
// get roster under sport from specific team
exports.getJoins = (req, res) => {
	connection.query('SELECT user_id, sport_id FROM (SELECT user_player_id FROM teamIsComposedOfUser WHERE team_player_id = ?) c JOIN sportIsJoinedByUser ON user_player_id = user_id', [req.params.id], function(err, rows, fields) {
		if (!err) {
			console.log("Success");
			res.send(rows);
		}
		else {
			console.log("Error");
			res.send(err);
		}
	});
}

//delete specific relation
exports.deleteJoin = (req, res) => {
	connection.query('DELETE FROM sportIsJoinedByUser WHERE user_id = ? and sport_id = ?', [req.params.user_id, req.params.sport_id], function(err, rows, fields) {
		if (!err) {
			console.log("Success");
			res.send({});
		}
		else {
			console.log("Error");
			res.send(err);
		}
	});
}
