'use strict'

var express = require('express');
var router = express.Router();

var userCtrl = require('../controllers/userController.js');
//user account routes
router.post('/api/login', userCtrl.loginUser);
router.post('/api/users/getAccount', userCtrl.getAccount);
router.post('/api/users/signup', userCtrl.addUser);
//user routes
router.get('/api/users', userCtrl.getUsers);
router.get('/api/users/:id', userCtrl.getUser);
router.put('/api/users/updateUser', userCtrl.updateUser);
router.delete('/api/users/:id', userCtrl.deleteUser);

//admin routes
var adminCtrl = require('../controllers/adminController.js');
router.get('/api/admins', adminCtrl.getAdmins);
router.get('/api/admins/:id', adminCtrl.getAdmin);
router.post('/api/admins/addAdmin', adminCtrl.addAdmin);
router.put('/api/admins/updateAdmin', adminCtrl.updateAdmin);
router.delete('api/admins/:id', adminCtrl.deleteAdmin);

var institutionCtrl = require('../controllers/institutionController.js');
//institution routes
router.post('/api/institutions/addSponsoringInstitution',institutionCtrl.addSponsoringInstitution);
router.get('/api/institutions/:id',institutionCtrl.viewSponsoringInstitution);
router.get('/api/institutions',institutionCtrl.viewAllSponsoringInstitution);
router.put('/api/institutions/updateSponsoringInstitution',institutionCtrl.updateSponsoringInstitution);
router.delete('/api/institutions/delete/:id',institutionCtrl.deleteSponsoringInstitution);

var eventCtrl = require('../controllers/eventController.js');
//event routes
router.post('/api/events/addEvent',eventCtrl.addEvent);
router.get('/api/events/:id',eventCtrl.viewEvent);
router.get('/api/events',eventCtrl.viewAllEvent);
router.put('/api/events/updateEvent',eventCtrl.updateEvent);
router.delete('/api/events/:id',eventCtrl.deleteEvent);

var sportCtrl = require('../controllers/sportController.js');
//sport routes
router.post('/api/sports/addSport',sportCtrl.addSport);
router.get('/api/sports/:id',sportCtrl.viewSport);
router.get('/api/sports',sportCtrl.viewAllSport);
router.put('/api/sports/updateSport',sportCtrl.updateSport);
router.delete('/api/sports/:id',sportCtrl.deleteSport);

var gameCtrl = require('../controllers/gameController.js');
//game routes
router.post('/api/games/addGame',gameCtrl.addGame);
router.get('/api/games/:id',gameCtrl.viewGame);
router.get('/api/games',gameCtrl.viewAllGame);
router.put('/api/games/updateGame',gameCtrl.updateGame);
router.delete('/api/games/:id',gameCtrl.deleteGame);

var teamCtrl = require('../controllers/teamController.js');
router.post('/api/teams/addTeam', teamCtrl.addTeam);
router.get('/api/teams', teamCtrl.viewAllTeam);
router.get('/api/teams/:id', teamCtrl.viewTeam);
router.put('/api/teams/updateTeam', teamCtrl.updateTeam);
router.delete('/api/teams/:id', teamCtrl.deleteTeam);

module.exports = router;
