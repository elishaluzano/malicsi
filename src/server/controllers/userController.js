'use strict'

const crypt = require('../crypt');
const mysql = require('mysql');
const connection = require(__dirname + '/../database.js');

// get current user
exports.getAccount = (req, res) => {
  res.send(req.session.user);
};
// login
exports.loginUser = (req, res) => {
	connection.query('SELECT * FROM user WHERE username = ? and password = ?',[req.body.username, req.body.password], function(err, rows, fields) {
		if (!err){
			if (rows.length === 0) {
				res.send(false);
				console.log("Login unsuccessful");
			}
			else if(req.body.password == crypt.decrypt(req.body.password)){
				req.session.user = rows[0];
				console.log("Successfully logged in user");
				res.send(rows[0]);
			}
		}
		else {
			console.log(err);
			res.send(err);
		}
	});
};

// signup
exports.addUser = (req, res) => {
	var newUser = {
		name : req.body.name,
		username : req.body.username,
		password : crypt.encrypt(req.body.password),
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
			res.send(err);
			console.log("Error in adding user");
		}
	});
};

// logout
exports.logout = (req, res) => {
    req.session.user = {};
    res.send({});
};

// GET all users
exports.getUsers = (req, res) => {
	connection.query('SELECT * FROM user', [], function(err, rows, fields) {
		if (!err) {
			res.send(rows);
			console.log("Successfully retrieved all users");
		}
		else {
			res.send(err);
			console.log("Error in retrieving all users");
		}
	});
};

// GET specific user
exports.getUser = (req, res) => {
	connection.query('SELECT * FROM user where user_id = ?', [req.params.id], function(err, rows, fields) {
		if (!err) {
			res.send(rows[0]);
			console.log("Successfully retrieved user");
		}
		else {
			res.send(err);
			console.log("Error in retrieving user");
		}
	});
};

// PUT specific user
exports.updateUser = (req, res) => {
	connection.query('UPDATE user SET name = ?, username = ?, password = ?, gender = ?, birthday = ?, email = ?, contact_number = ?, profile_pic = ? where user_id = ?',[req.body.name, req.body.username, crypt.encrypt(req.body.password), req.body.gender, req.body.birthday, req.body.email, req.body.contact_number, req.body.profile_pic, req.params.id], function(err, rows, fields) {
		if (!err) {
			console.log("Successfully edited user");
			res.send(rows[0]);
		}
		else {
			res.send(err);
            console.log(err);
			console.log("Error in editing user");
		}
	});
};

// DELETE specific user
exports.deleteUser = (req, res) => {
	connection.query('DELETE FROM user WHERE user_id = ?',[req.params.id], function(err, rows, fields) {
		if (!err) {
			res.send({});
			console.log("Successfully deleted user");
		}
		else {
			res.send(err);
            console.log(err);
			console.log("Error in deleting user");
		}
	});
};

// SEARCH a user
exports.searchUser = (req,res) => {
	connection.query('SELECT * FROM user WHERE name LIKE ? or username LIKE ?', [ '%' + req.params.search + '%' , '%' + req.params.search + '%'], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Successfully viewed a user.");
        }
	});
};

//Admin

// check if user is an admin
exports.checkAdmin = (req, res) => {
    connection.query('SELECT * FROM user JOIN institutionHasAdmin ON user.user_id = institutionHasAdmin.user_no where user.user_id = ?', [req.params.id], function(err, rows, fields) {
        if (!err){
            if (rows[0] !== null){
                res.send(rows[0]);
                console.log("User is an admin");
            }
            else {
                res.send(false);
                console.log("User is not an admin");
            }
        }
        else {
            res.send(err);
            console.log("Error in checking admin");
        }
    });
};

// GET all admins
exports.getAdmins = (req, res) => {
    connection.query('SELECT * FROM user JOIN institutionHasAdmin on user.user_id = institutionHasAdmin.user_no',[], function (err, rows, fields){
        if (!err) {
            res.send(rows);
            console.log("Successfully retrieved all admins");
        }
        else {
            res.send(err);
            console.log("Error in retrieving all admins");
        }
    });
};

// GET all admins under specific institution
exports.getAdmin = (req, res) => {
    connection.query('SELECT * FROM user JOIN institutionHasAdmin on user.user_id = institutionHasAdmin.user_no where institution_no = ?',[req.params.id],function(err, rows, fields){
        if (!err){
            res.send(rows);
            console.log("Successfully retrieved all admins under an institution");
        }
        else {
            res.send(err);
            console.log("Error in retrieving all admins under an institution");
        }
    });
};

// POST an admin
exports.addAdmin = (req, res) => {
    var newAdmin = {
        institution_no : req.body.institution_no,
        user_no : req.body.user_no
    };
    connection.query('INSERT INTO institutionHasAdmin set ?', newAdmin, function(err, rows, fields){
        if (!err){
            res.send(rows[0]);
            console.log("Successfully added new admin");
        }
        else {
            res.send(err);
            console.log("Error in adding new admin");
        }
        
    });
};

// DELETE an admin
exports.deleteAdmin = (req, res) => {
    connection.query('DELETE FROM institutionHasAdmin where institution_no = ? and user_no = ?',[req.params.institution_id, req.params.user_id],function(err, rows, fields){
        if (!err){
            res.send({});
            console.log("Successfully deleted an admin");
        }
        else {
            res.send(err);
            console.log("Error in deleting an admin");
        }
    });
};
