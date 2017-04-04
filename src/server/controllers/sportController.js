'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js');


exports.addSport = (req,res) => {
	var info = {
		name: req.body.name
	};
	connection.query('INSERT INTO sport SET ?', info, function(err, rows, fields) {
		if (!err) {
		    info.sport_id = rows.insertId;
			res.send(info);
			console.log("Successfully added sport");
		}
		else {
			console.log(err);
			res.send(err);
			console.log("Error in adding sport");
		}
	});
};

exports.viewSport = (req,res) => {
	connection.query('SELECT * FROM sport WHERE sport_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows[0]);
		}else{
			console.log(err);
			res.send(err);
		}
	});
};

exports.viewAllSport = (req,res) => {
	connection.query('SELECT * FROM sport', [], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
			res.send(err);
		}
	});
};

exports.searchSport = (req,res) => {
	connection.query('SELECT * FROM sport WHERE name LIKE ?', [ '%' + req.params.search + '%'], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			console.log(err);
			res.send(err);
		}
	});
};

exports.updateSport = (req,res) => {
    var info = {
        sport_id : req.params.id,
        name : req.body.name
    };
	connection.query('UPDATE sport SET name = ? WHERE sport_id = ?', [req.body.name,req.params.id], function(err, rows, fields){
		if(!err) {
			console.log("Success");
			res.send(info);
		}else{
			console.log(err);
			res.send(err);
		}
	});
};

exports.deleteSport = (req,res) => {
	connection.query('DELETE FROM sport WHERE sport_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			console.log("Success");
			res.send(null);
		}else{
			console.log(err);
			res.send(err);
		}
	});
};

//post join relation
exports.addJoin = (req, res) => {
	var info = {
		user_id : req.body.user_id,
		sport_id : req.body.sport_id
	};
	connection.query('INSERT into SportIsJoinedByUser SET ?', info, function(err, rows, fields) {
		if (!err) {
			console.log("Success");
			res.send(info);
		}
		else {
			console.log("Error");
			res.send(err);
		}
	});
};
//get all join relations
exports.getAllJoins = (req, res) => {
	connection.query('SELECT * FROM sportIsJoinedByUser join', [], function(err, rows, fields) {
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
};

//delete specific relation
exports.deleteJoin = (req, res) => {
	connection.query('DELETE FROM sportIsJoinedByUser WHERE user_id = ? and sport_id = ?', [req.params.user_id, req.params.sport_id], function(err, rows, fields) {
		if (!err) {
			console.log("Success");
			res.send(null);
		}
		else {
			console.log("Error");
			res.send(err);
		}
	});
};
