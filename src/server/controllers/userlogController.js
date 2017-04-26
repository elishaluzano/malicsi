'use strict'

const mysql = require('mysql');
const connection = require(__dirname + '/../database.js');

//GET userlogs from specific user
exports.getUserlog = (req, res) => {
    connection.query('SELECT * FROM userlog WHERE user_id = ?',[req.params.id],function(err, rows, fields){
        if (!err){
            res.send(rows);
            console.log("Successfully retrieved logs from specific user");
        }
        else {
            res.send(err);
            console.log("Error in retrieveing logs from specific user");
        }
    });
}
//GET all userlogs
exports.getUserlogs = (req, res) => {
    connection.query('SELECT * FROM userlog',[],function(err, rows, fields){
        if (!err) {
            res.send(rows);
            console.log("Successfully retrieved all logs");
        }
        else {
            res.send(err);
            console.log("Error in retrieveing all logs");
        }
    });
}

//POST userlog
exports.addLog = (req, res) => {
    var newLog = {
        user_id : req.body.user_id,
        institution_id : req.body.institution_id,
        action : req.body.action
    }
    connection.query('INSERT INTO userlog SET ?', newLog, function(err, rows, fields){
        if (!err) {
            newLog.log_id = rows.insertId;
            res.send(newLog);
            console.log("Successfully added new log");
        }
        else {
            res.send(err);
            console.log("Error in adding new log");
        }
    });
}
