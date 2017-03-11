const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js')

//get current user
exports.getAccount = (req, res) => {
  res.send(req.session.user);
}

//login 
exports.loginUser = (req, res) => {
	connection.query('SELECT * FROM user WHERE username = ?',[req.body.username], function(err, rows, fields) {
		if (!err){
			if (req.body.password == rows[0].password) {
				req.session.user = rows[0];
				console.log(req.session.user);
				res.send(true);
			}	
			else {
				res.send(false);
			}
		}
		else {
			console.log(err);
		}
	});
}

//signup
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
	}
	connection.query('INSERT INTO user set ?',[newUser], function(err, rows, fields) {
		if (!err) {
			req.session.user = newUser;
			res.send(true);
		}
		else {
			console.log(err);
			res.send(false);
		}
	});
} 
