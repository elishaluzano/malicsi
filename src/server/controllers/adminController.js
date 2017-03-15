'use strict'

const mysql = require('mysql');
const connection = require(__dirname + '/../database.js');

// GET all admins
exports.getAdmins = (req, res) => {
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

// GET specific admin
exports.getAdmin = (req, res) => {
	connection.query('SELECT FROM admin where admin_id ?',[req.params.id], function(err, rows, fields) {
		if (!err) {
			res.send(rows[0]);
			console.log("Successfully retrieved an admin");
		}
		else {
			console.log("Error in retrieving an admin");
		}
	});
}

// POST admin
exports.addAdmin = (req, res) => {
	connection.query('INSERT INTO admin SET ?',[req.body.admin_id, req.body.position], function(err, rows, fields) {
		if (!err) {
			console.log("Successfully added an admin");
		}
		else {
			console.log("Error in adding an admin");
		}
	});
}

// PUT specific admin 
exports.updateAdmin = (req, res) => {
	connection.query('UPDATE admin SET position = ? where admin_id = ?',[req.body.position, req.body.admin_id], function(err, rows, fields) {
		if (!err) {
			console.log("Successfully updated an admin");
		}
		else {
			console.log("Error in updating an admin");
		}
	});
}

// DELETE specific admin
exports.deleteAdmin = (req, res) => {
	connection.query('DELETE FROM admin where admin_id = ?',[req.params.id],function(err, rows, fields) {
		if (!err) {
			console.log("Successfully deleted an admin");
		}
		else {
			console.log("Error in deleting an admin");
		}
	});
}

/*
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
*/
