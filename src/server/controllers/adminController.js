'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js')

// GET all admins
exports.getAdmins = (req, res) => {
	connection.query('SELECT * FROM admin',[], function(err, rows, fields) {
		if (!err) {
			res.send(rows);	
			console.log(("Successfully retrieved all admins");
		}
		else {
		
		}
	});
}

// GET all admins under a sponsoring institution 
