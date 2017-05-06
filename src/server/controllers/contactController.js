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
    connection.query('INSERT INTO contactPersonInCaseOfEmergency SET ?', info, function(err, rows, fields) {
        if (!err) {
            info.contact_person_id = rows.insertId;
            res.send(info);
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
    connection.query('SELECT * FROM contactPersonInCaseOfEmergency WHERE contact_person_id = ?', [req.params.id], function(err, rows, fields){
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
    connection.query('SELECT * FROM contactPersonInCaseOfEmergency', [], function(err, rows, fields){
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
    var info = {
        contact_person_id: req.params.id,
        contact_person_name: req.body.contact_person_name,
        contact_person_relationship: req.body.contact_person_relationship,
        contact_person_number: req.body.contact_person_number
    };
    connection.query('UPDATE contactPersonInCaseOfEmergency SET contact_person_name = ?, contact_person_relationship = ?, contact_person_number = ? WHERE contact_person_id = ?', [req.body.contact_person_name, req.body.contact_person_relationship,req.body.contact_person_number,req.params.id], function(err, rows, fields){
        if(!err) {
            console.log("Success");
            res.send(info);
        }else{
            console.log(err);
            res.send(err);
        }
    });
}

// DELETE specific contact
exports.deleteContact = (req,res) => {
    connection.query('DELETE FROM contactPersonInCaseOfEmergency WHERE contact_person_id = ?', [req.params.id], function(err, rows, fields){
        if(!err) {
            console.log("Success");
            res.send(null);
        }else{
            console.log(err);
            res.send(err);
        }
    });
}
