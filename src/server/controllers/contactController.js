'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require(__dirname + '/../database.js');

// ADD specific contact
exports.addContact = (req,res) => {
    var info = {
        contact_person_name: req.body.contact_person_name,
        contact_person_relationship: req.body.contact_person_relationship,
        contact_person_number: req.body.contact_person_number
    };
    connection.query('INSERT INTO contactpersonincaseofemergency SET ?', info, function(err, rows, fields) {
        if (!err) {
            res.send(rows[0]);
            console.log("Successfully added contact");
        }
        else {
            console.log(err);
            res.send(err);
            console.log("Error in adding contact");
        }
    });
}

// VIEW specific contact
exports.viewContact = (req,res) => {
    connection.query('SELECT * FROM contactpersonincaseofemergency WHERE contact_person_name = ?', [req.params.id], function(err, rows, fields){
        if(!err) {
            res.send(rows[0]);
        }else{
            console.log(err);
            res.send(err);
        }
    });
}

// VIEW all contacts
exports.viewAllContact = (req,res) => {
    connection.query('SELECT * FROM contactpersonincaseofemergency', [], function(err, rows, fields){
        if(!err) {
            res.send(rows);
        }else{
            console.log(err);
            res.send(err);
        }
    });
}

// UPDATE specific contact
exports.updateContact = (req,res) => {
    connection.query('UPDATE contactpersonincaseofemergency SET contact_person_relationship = ?, contact_person_number = ? WHERE contact_person_name = ?', [req.body.contact_person_relationship,req.body.contact_person_number,req.params.id], function(err, rows, fields){
        if(!err) {
            console.log("Success");
            res.send(rows[0]);
        }else{
            console.log(err);
            res.send(err);
        }
    });
}

// DELETE specific contact
exports.deleteContact = (req,res) => {
    connection.query('DELETE FROM contactpersonincaseofemergency WHERE contact_person_name = ?', [req.params.id], function(err, rows, fields){
        if(!err) {
            console.log("Success");
            res.send({});
        }else{
            console.log(err);
            res.send(err);
        }
    });
}