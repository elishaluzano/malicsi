'use strict'

var express = require('express');
var router = express.Router();

//insert routes here

var eventCtrl = require('../controllers/eventController.js');
router.post('/api/events/addEvent',eventCtrl.addEvent);
router.get('/api/events/:event_id',eventCtrl.viewEvent);
router.get('/api/events',eventCtrl.viewAllEvent);
router.put('/api/events/updateEvent',eventCtrl.updateEvent);
router.delete('/api/events/:event_id',eventCtrl.deleteEvent);

var sportCtrl = require('../controllers/sportController.js');
router.post('/api/sports/addSport',sportCtrl.addSport);
router.get('/api/sports/:id',sportCtrl.viewSport);
router.get('/api/sports',sportCtrl.viewAllSport);
router.put('/api/sports/updateSport',sportCtrl.updateSport);
router.delete('/api/sports/:id',sportCtrl.deleteSport);

var gameCtrl = require('../controllers/gameController.js');
router.post('/api/games/addGame',gameCtrl.addGame);
router.get('/api/games/:id',gameCtrl.viewGame);
router.get('/api/games',gameCtrl.viewAllGame);
router.put('/api/games/updateGame',gameCtrl.updateGame);
router.delete('/api/games/:id',gameCtrl.deleteGame);

module.exports = router;

