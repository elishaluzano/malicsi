'use strict'

const mysql = require('mysql');
const connection = require(__dirname + '/../database.js');

// get current user
exports.getAccount = (req, res) => {
  res.send(req.session.user);
}
// login 
exports.loginUser = (req, res) => {
	connection.query('SELECT * FROM user WHERE username = ?',[req.body.username], function(err, rows, fields) {
		if (!err){
			if (req.body.password == rows[0].password) {
				req.session.user = rows[0];
				console.log("Successfully logged in user");
				res.send(rows[0]);
			}	
			else {
				res.send(false);
				console.log("Error in logging in user");
			}
		}
		else {
			console.log(err);
		}
	});
}

// signup
exports.addUser = (req, res) => {
	var newUser = {
		name : req.body.name,
		username : req.body.username,
		password : req.body.password,
		gender : req.body.gender,
		birthday : req.body.birthday,
		email : req.body.email,
		contact_number : req.body.contact_number,
		contact_person : req.body.contact_person,
		profile_pic : req.body.profile_pic
	};
	connection.query('INSERT INTO user SET ?', newUser, function(err, rows, fields) {
		if (!err) {
			req.session.user = newUser;
			res.send(rows[0]);
			console.log("Successfully added user");
		}
		else {
			console.log(err);
			res.send(false);
			console.log("Error in adding user");
		}
	});
}

// GET all users
exports.getUsers = (req, res) => {
	connection.query('SELECT * FROM user', [], function(err, rows, fields) {
		if (!err) {
			res.send(rows);
			console.log("Successfully retrieved all users");
		}
		else {
			res.send(false);
			console.log("Error in retrieving all users");
		}
	});
} 

// GET specific user
exports.getUser = (req, res) => {
	connection.query('SELECT * FROM user where user_id = ?', [req.params.id], function(err, rows, fields) {
		if (!err) {
			res.send(rows[0]);
			console.log("Successfully retrieved user");
		}
		else {
			console.log("Error in retrieving user");
		}
	});
} 

// PUT specific user
exports.updateUser = (req, res) => {
	connection.query('UPDATE user SET name = ?, username = ?, password = ?, gender = ?, birthday = ?, email = ?, contact_number = ? where user_id = ?',[req.body.name, req.body.username, req.body.password, req.body.gender, req.body.birthday, req.body.email, req.body.contact_number,req.params.id], function(err, rows, fields) {
		if (!err) {
			console.log("Successfully edited user");
			res.send(rows[0]);
		}
		else {
			console.log("Error in editing user");
		}
	});
}

// DELETE specific user
exports.deleteUser = (req, res) => {
	connection.query('DELETE FROM user WHERE user_id = ?',[req.params.id], function(err, rows, fields) {
		if (!err) {
			console.log("Successfully deleted user");
		}
		else {
			console.log("Error in deleting user");
		}
	});
}
