const mysql = require('mysql');
const connection = require('./../database.js');


exports.addUserAffiliation = (req,res) =>{
	var user_affiliation = {
		user_no: req.body.user_no,
		affiliation : req.body.affiliation
	};
	connection.query('INSERT INTO userAffiliation SET ?', user_affiliation, function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(user_affiliation);
            console.log("Successfully added a user affiliaton");
        }
	});
};

exports.viewAllUserAffiliation = (req,res) => {
	connection.query('SELECT * FROM userAffiliation',[], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully viewed all user affiliations.");
        }
	});
};

exports.viewUserAffiliation = (req,res) => {
	connection.query('SELECT * FROM userAffiliation WHERE user_no = ?', [ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully viewed a useraffiliation.");
        }
	});
};

exports.updateUserAffiliation = (req,res) => {
    var user_affiliation = {
		user_no: req.params.id,
		affiliation : req.body.affiliation,
		old_affiliation : req.body.old_affiliation
	};
	connection.query('UPDATE userAffiliation SET affiliation = ? WHERE user_no = ? and affiliation = ?', [ req.body.affiliation, req.params.id, req.body.old_affiliation ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(user_affiliation);
            console.log("Successfully updated useraffiliation.");
        }
	});
};

exports.deleteUserAffiliation = (req,res) => {
	connection.query('DELETE FROM userAffiliation WHERE user_no = ? and affiliation = ?', [ req.params.id, req.params.affiliation], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(null);
            console.log("Successfully deleted a useraffiliation.");
        }
	});
};
