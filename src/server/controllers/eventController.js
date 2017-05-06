'use strict'

const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = require('./../database.js');


exports.addEvent = (req,res) => {
	var info = {
		event_title: req.body.event_title,
		venue_id_key: req.body.venue,
		start_date: req.body.start_date,
		end_date: req.body.end_date,
		picture: (req.file)? req.file.path.substring(req.file.path.indexOf('dist/')).replace('dist', '') : '',
		institution_id_key: req.body.institution_id_key
	};
	connection.query('INSERT INTO event SET ?', info, function(err, rows, fields) {
		if (!err) {
		    info.event_id = rows.insertId;
			res.send(info);
			console.log("Successfully added event");
		}
		else {
			console.log(err);
			res.send(err);
			console.log("Error in adding event");
		}
	});
};

exports.viewEvent = (req,res) => {
	connection.query('SELECT * FROM event WHERE event_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(rows[0]);
		}else{
			res.send(err);
		}
	});
};

exports.viewAllEvent = (req,res) => {
	connection.query('SELECT * FROM event', [], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			res.send(err);
		}
	});
};

exports.searchEvent = (req,res) => {
	connection.query('SELECT * FROM event WHERE event_title LIKE ? order by event_title', [ '%' + req.params.search + '%'], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			res.send(err);
		}
	});
};

exports.viewEventDetails = (req,res) => {
	connection.query('SELECT e.event_title AS event, s.name AS sport, g.time, g.game_id, t.name AS team, si.name AS institution, \
		v.name AS venue FROM event e JOIN game g JOIN sport s JOIN team t JOIN sponsoringInstitution si JOIN venue v JOIN teamPlaysGame tpg \
		WHERE e.event_id = ? AND s.event_id_key = e.event_id AND g.sport_id_key = s.sport_id AND e.institution_id_key = si.institution_id \
		AND g.venue = v.venue_id AND tpg.game_id_play = g.game_id AND tpg.team_id_play = t.team_id AND t.event_id_key = e.event_id',
		[ req.params.id ], function(err, rows, fields){
		if(!err) {
			res.send(rows);
		}else{
			res.send(err);
		}
	});
};

exports.updateEvent = (req,res) => {
    var info = {
        event_id : req.params.id,
		event_title: req.body.event_title,
		venue_id_key: req.body.venue_id_key,
		start_date: req.body.start_date,
		end_date: req.body.end_date,
		picture: (typeof req.file != 'undefined') ? req.file.path.substring(req.file.path.indexOf('dist/')).replace('dist', '') : req.body.picture,
		institution_id_key: req.body.institution_id_key
	};
	connection.query('UPDATE event SET event_title = ?, venue_id_key = ?, start_date = ?, end_date = ?, picture = ? WHERE event_id = ?', [req.body.event_title, req.body.venue_id_key, req.body.start_date, req.body.end_date, info.picture, req.params.id], function(err, rows, fields){
		if(!err) {
			res.send(info);
			console.log("Success");
		}else{
			console.log(err);
			res.send(err);
		}
	});
};

exports.deleteEvent = (req,res) => {
	connection.query('DELETE FROM event WHERE event_id = ?', [req.params.id], function(err, rows, fields){
		if(!err) {
			console.log("Success");
			res.send(null);
		}else{
			console.log(err);
			res.send(err);
		}
	});
};

exports.viewSportsInEvent = (req, res) => {
    connection.query('SELECT * FROM sport NATURAL JOIN eventHasSport where event_id = ?', [req.params.id], function(err, rows, fields){
        if (!err) {
            console.log("Success");
            console.log(rows);
            res.send(rows);
        }
        else {
            console.log(err);
            res.send(err);
        }
    });
};

exports.viewTeamsInEvent = (req, res) => {
    connection.query('SELECT * FROM team WHERE event_id_key = ?', [req.params.id], function(err, rows, fields){
        if (!err) {
            console.log("Success");
            res.send(rows);
        }
        else {
            console.log("Error");
            res.send(err);
        }
    });
};

exports.viewGamesInEvent = (req, res) => {
    connection.query('SELECT * FROM game WHERE event_id = ?', [req.params.id], function(err, rows, fields){
        if (!err) {
            console.log("Success");
            res.send(rows);
        }
        else {
            console.log("Error");
            res.send(err);
        }
    });
};

exports.viewGamesInSportInEvent = (req, res) => {
    connection.query('select * from game where sport_id=? and event_id=?'/*'SELECT * FROM game where sport_id = (select sport_id from eventHasSport where event_id = ? and sport_id = ?)'*/, [req.params.event_id, req.params.sport_id], function(err, rows, fields){
        if (!err) {
            console.log("Success");
            res.send(rows);
        }
        else {
            console.log("Error");
            res.send(err);
        }
    });
};

exports.viewGeneralInformation = (req, res) => {
    connection.query('select s.name as sport, g.time, g.game_id, e.event_title as event, t.name as team, si.description as institution, v.name as venue from event e join game g join sport s join team t join sponsoringInstitution si join venue v join teamPlaysGame tpg where e.event_id = ? and g.event_id = e.event_id and g.sport_id = s.sport_id and e.institution_id_key = si.institution_id and g.venue = v.venue_id and tpg.game_id_play = g.game_id and tpg.team_id_play = t.team_id and t.event_id_key = e.event_id', [req.params.id], function(err, rows, fields){
        if (!err) {
            console.log("Success");
            res.send(rows);
        }
        else {
            console.log("Error");
            res.send(err);
        }
    });
};

exports.viewDoneEventInfo = (req, res) => {
    connection.query('select distinct s.name as sport, s.sport_id as sport_id, g.time, g.game_id, e.event_id as event_id, e.event_title as event, t.team_id, t.name as team, e.institution_id_key, si.description as institution, v.name as venue, tpg.score as score, tpg.record as record from event e join game g join sport s join team t join sponsoringInstitution si join venue v join teamPlaysGame tpg join eventHasSport ehs where e.event_id = ? and s.sport_id = ehs.sport_id and g.sport_id = s.sport_id and e.institution_id_key = si.institution_id and g.venue = v.venue_id and tpg.game_id_play = g.game_id and tpg.team_id_play = t.team_id and t.event_id_key = e.event_id', [req.params.id], function(err, rows, fields){
        if (!err) {
            console.log("Success");
            res.send(rows);
        }
        else {
            console.log("Error");
            res.send(err);
        }
    });
};

exports.addSportToEvent = (req, res) => {
    let info = {
        event_id: req.body.event_id,
        sport_id: req.body.sport_id
    };

    connection.query('INSERT INTO eventHasSport VALUES (?, ?)', 
        [req.body.event_id, req.body.sport_id],
        (err, rows, fields) => {

            if (!err) {
                console.log("Success in adding a sport to event");
                res.send(info);
            } else {
                res.send(err);
                console.log(err);
            }
        });
}

exports.deleteSportOfEvent = (req, res) => {
    connection.query('DELETE FROM eventHasSport WHERE event_id = ? AND sport_id = ?', [req.params.event_id, req.params.sport_id], (err, rows, fields) => {
        if (!err) {
            console.log('Success in deleting a sport from an event');
            res.send(null);
        } else {
            res.send(err);
            console.log(err);
        }
    });
}
