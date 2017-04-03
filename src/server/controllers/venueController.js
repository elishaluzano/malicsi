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
            venue.venue_id = rows.insertId;
            res.send(venue);
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
};

exports.searchVenue = (req,res) => {
    connection.query('SELECT * FROM venue WHERE name LIKE ?', ['%' + req.params.search + '%'], function(err, rows, fields){
        if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
        }
    });
};

exports.updateVenue = (req,res) => {
    var venue = {
        venue_id: req.params.id,
        name: req.body.name,
    };
	connection.query('UPDATE venue SET name = ? WHERE venue_id = ?', [ req.body.name, req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(venue);
            console.log("Successfully updated a venue.");
        }
	});
};

exports.deleteVenue = (req,res) => {
	connection.query('DELETE FROM venue WHERE venue_id = ?', [ req.params.id ], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(null);
            console.log("Successfully deleted a venue.");
        }
	});
};
