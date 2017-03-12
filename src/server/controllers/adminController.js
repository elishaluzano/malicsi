'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js')

// GET all admins
exports.getAllAdmins = (req, res) => {
	connection.query('SELECT * FROM admin',[], function(err, rows, fields) {
		if (!err) {
			res.send(rows);	
			console.log("Successfully retrieved all admins");
		}
		else {
			console.log("Error in retrieving all admins");
		}
	});
}

// GET all admins under a sponsoring institution 
exports.getAdmins = (req, res) => {
	connection.query('SELECT * from admin where ',[], function(err, rows, fields) {
		if (!err) {
			res.send(rows);
			console.log("Successfully retrieved all admins under an institution");
		}
		else {
			console.log("Error in retrieving all admins under an institution");
		}
	});
}
