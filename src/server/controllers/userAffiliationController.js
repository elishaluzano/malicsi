const mysql = require('mysql');
const connection = require('./../database.js');


exports.addUserAffiliation = (req,res) =>{
	var user_affilitaion = {
		user_no: req.body.user_no,
		affiliation : req.body.affiliation
	};
	connection.query('INSERT INTO useraffiliation SET ?', user_affilitaion, function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully added a user_affilitaion");
        }
	});
}

exports.viewAllUserAffiliation = (req,res) => {
	connection.query('SELECT * FROM useraffiliation',[], function(err, rows, fields){
		if (err) {
            console.log(err)
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully viewed all user affiliations.");
        }
	});
}

exports.viewUserAffiliation = (req,res) => {
	connection.query('SELECT * FROM useraffiliation WHERE user_no = ?', [ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows[0]);
            console.log("Successfully viewed a useraffiliation.");
        }
	});
}

exports.updateUserAffiliation = (req,res) => {
	connection.query('UPDATE useraffiliation SET affiliation = ? WHERE user_no = ?', [ req.body.affiliation, req.body.user_no ], function(err, rows, fields){
		if (err) {
            console.log(err)
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully updated useraffiliation.");
        }
	});
}

exports.deleteUserAffiliation = (req,res) => {
	connection.query('DELETE FROM useraffiliation WHERE user_no = ?', [ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err)
            res.send(err);
         }
        else {
            res.send({});
            console.log("Successfully deleted a useraffiliation.");
        }
	});
}