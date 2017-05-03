'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js');

    
exports.addSponsoringInstitution = (req,res) => {
	var institution = {
		name : req.body.name,
		description : req.body.description,
		picture : (req.file)? req.file.path.substring(req.file.path.indexOf('dist/')).replace('dist', '') : ''
	};
	connection.query('INSERT INTO sponsoringInstitution SET ?', institution, function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            institution.institution_id = rows.insertId;
            res.send(institution);
            console.log("Successfully added an institution");
        }
	});
};

exports.viewSponsoringInstitution = (req,res) => {
	connection.query('SELECT * FROM sponsoringInstitution WHERE institution_id = ?', [req.params.id], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows[0]);
            console.log("View an institution");
        }
	});
};

exports.viewAllSponsoringInstitution = (req,res) => {
	connection.query('SELECT * FROM sponsoringInstitution',[], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("View all institutions");
        }
	});
};

exports.searchSponsoringInstitution = (req,res) => {
    connection.query('SELECT * FROM sponsoringInstitution WHERE name LIKE ?', ['%' + req.params.search + '%'], function(err, rows, fields){
        if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Searched an institution");
        }
    });
};

exports.updateSponsoringInstitution = (req,res) => {
    console.log(req.file);
    var institution = {
        institution_id : req.params.id,
		name : req.body.name,
		description : req.body.description,
		picture : (typeof req.file != 'undefined') ? req.file.path.substring(req.file.path.indexOf('dist/')).replace('dist', '') : req.body.picture
	};
	connection.query('UPDATE sponsoringInstitution SET name = ?, description = ?, picture = ? WHERE institution_id = ?', [req.body.name, req.body.description, institution.picture, req.params.id], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(institution);
            console.log("Successfully updated an institution");
        }
	});
};

exports.deleteSponsoringInstitution = (req,res) => {
	connection.query('DELETE FROM sponsoringInstitution WHERE institution_id= ?', [req.params.id], function(err, rows, fields){
		if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(null);
            console.log("Successfully deleted an institution");
        }
	});
};
  
exports.viewEventsInInstitution = (req, res) => {
    connection.query('select * from event where institution_id_key = ?',[req.params.id],function(err, rows, fields){
        if (err) {
            console.log(err);
            res.send(err);
         }
        else {
            res.send(rows);
            console.log("Viewed institutions in event");
        }
    });
};
