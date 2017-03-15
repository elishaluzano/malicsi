'use strict'

var express = require('express');
var router = express.Router();

//Team-Plays Relation routes
var teamCtrl = require('../controllers/teamController.js');
router.get('/api/teams/getPlays', teamCtrl.getAllPlays);
router.get('/api/teams/getPlays/:id', teamCtrl.getPlays);
router.post('/api/teams/addPlays', teamCtrl.addPlays);
router.delete('/api/teams/deletePlays/:id', teamCtrl.removePlays);

//Team-Wins Relation routes
router.get('/api/teams/getWins', teamCtrl.getAllWins);
router.get('/api/teams/getWins/:id', teamCtrl.getWins);
router.post('/api/teams/addWins', teamCtrl.addWins);
router.delete('/api/teams/deleteWins/:id', teamCtrl.removeWins);

/*
EXAMPLE 
var sampleCtrl = require('../controllers/sampleController.js');
router.post('/getSomething', sampleCtrl.getSomething);
router.post('/insertSomething', sampleCtrl.insertSomething);
*/
module.exports = router;

