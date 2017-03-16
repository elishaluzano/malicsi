'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js')

    
exports.addSponsoringInstitution = (req,res) => {
	var institution = {
		name : req.body.name,
		description : req.body.description
	};
	connection.query('INSERT INTO sponsoringInstitution SET ?', institution, function(err, rows, fields){
		if (err) {
            console.log(err)
         }
        else {
            res.send('Successfully added an institution.')
        }
	});
}

exports.viewSponsoringInstitution = (req,res) => {
	connection.query('SELECT * FROM sponsoringInstitution WHERE institution_id = ?', [req.params.institution_id], function(err, rows, fields){
		if (err) {
            console.log(err)
         }
        else {
            res.send(rows[0])
        }
	});
}

exports.viewAllSponsoringInstitution = (req,res) => {
	connection.query('SELECT * FROM sponsoringInstitution',[], function(err, rows, fields){
		if (err) {
            console.log(err)
         }
        else {
            res.send(rows)
        }
	});
}

exports.updateSponsoringInstitution = (req,res) => {
	connection.query('UPDATE sponsoringInstitution SET name = ?, description = ? WHERE institution_id= ?', [req.body.name, req.body.description, req.body.institution_id], function(err, rows, fields){
		if (err) {
            console.log(err)
         }
        else {
            res.send('Successfully updated an institution.')
        }
	});
}

exports.deleteSponsoringInstitution = (req,res) => {
	connection.query('DELETE FROM sponsoringInstitution WHERE institution_id= ?', [req.params.institution_id], function(err, rows, fields){
		if (err) {
            console.log(err)
         }
        else {
            res.send('Successfully deleted an institution.')
        }
	});
}
  