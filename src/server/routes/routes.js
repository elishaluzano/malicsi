'use strict'

var express = require('express');
var router = express.Router();	

//insert routes here

var teamCtrl = require('../controllers/teamController.js');
router.post('/api/teams/addTeam', teamCtrl.addTeam);
router.get('/api/teams', teamCtrl.viewAllTeam);
router.get('/api/teams/:id', teamCtrl.viewTeam);
router.put('/api/teams/updateTeam', teamCtrl.updateTeam);
router.delete('/api/teams/:id', teamCtrl.deleteTeam);

/*router.get('/api/teams/isComposedOf', teamCtrl.getIsComposedOf);
router.get('/api/teams/isComposedOf/:id', teamCtrl.getAllIsComposedOf);
router.post('/api/teams/addIsComposedOf', teamCtrl.addIsComposedOf);
router.delete('/api/teams/:id', teamCtrl.deleteIsComposed);*/


/*
EXAMPLE 
var sampleCtrl = require('../controllers/sampleController.js');
router.post('/getSomething', sampleCtrl.getSomething);
router.post('/insertSomething', sampleCtrl.insertSomething);
*/

module.exports = router;

