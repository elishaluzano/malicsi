const mysql = require('mysql');
const connection = require('./../database.js');

exports.addVenue = (req,res) =>{
	var venue = {
		name : req.body.name,
	};
	connection.query('INSERT INTO venue SET ?', venue, function(err, rows, fields){
		if (err) {
            console.log(err)
            res.send(err);
         }
        else {
            res.send(rows[0]);
            console.log("Successfully added a venue");
        }
	});
}

exports.viewAllVenue = (req,res) => {
	connection.query('SELECT * FROM venue',[], function(err, rows, fields){
		if (err) {
            console.log(err)
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully viewed all venues.");
        }
	});
}

exports.viewVenue = (req,res) => {
	connection.query('SELECT * FROM venue WHERE venue_id = ?', [ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err)
            res.send(err);
         }
        else {
            res.send(rows[0]);
            console.log("Successfully viewed a venue.");
        }
	});
}

exports.updateVenue = (req,res) => {
	connection.query('UPDATE venue SET name = ? WHERE venue_id = ?', [ req.body.name, req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err)
            res.send(err);
         }
        else {
            res.send(rows[0]);
            console.log("Successfully updated a venue.");
        }
	});
}

exports.deleteVenue = (req,res) => {
	connection.query('DELETE FROM venue WHERE venue_id = ?', [ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err)
            res.send(err);
         }
        else {
            res.send({});
            console.log("Successfully deleted a venue.");
        }
	});
}
