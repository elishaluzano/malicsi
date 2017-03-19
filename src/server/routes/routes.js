'use strict'

var express = require('express');
var router = express.Router();

var userCtrl = require('../controllers/userController.js');
//user account routes
router.post('/api/login', userCtrl.loginUser);
router.post('/api/sessions', userCtrl.getAccount);
router.post('/api/users', userCtrl.addUser);
//user routes
router.get('/api/users', userCtrl.getUsers);
router.get('/api/users/:id', userCtrl.getUser);
router.put('/api/users/:id', userCtrl.updateUser);
router.delete('/api/users/:id', userCtrl.deleteUser);

var adminCtrl = require('../controllers/adminController.js');
//admin routes
router.get('/api/admins', adminCtrl.getAdmins);
router.get('/api/admins/:id', adminCtrl.getAdmin);
router.post('/api/admins', adminCtrl.addAdmin);
router.put('/api/admins/:id', adminCtrl.updateAdmin);
router.delete('api/admins/:id', adminCtrl.deleteAdmin);


var institutionCtrl = require('../controllers/institutionController.js');
//institution routes
router.post('/api/institutions',institutionCtrl.addSponsoringInstitution);
router.get('/api/institutions/:id',institutionCtrl.viewSponsoringInstitution);
router.get('/api/institutions',institutionCtrl.viewAllSponsoringInstitution);
router.put('/api/institutions/:id',institutionCtrl.updateSponsoringInstitution);
router.delete('/api/institutions/:id',institutionCtrl.deleteSponsoringInstitution);

var eventCtrl = require('../controllers/eventController.js');
//event routes
router.post('/api/events',eventCtrl.addEvent);
router.get('/api/events/:id',eventCtrl.viewEvent);
router.get('/api/events',eventCtrl.viewAllEvent);
router.put('/api/events/:id',eventCtrl.updateEvent);
router.delete('/api/events/:id',eventCtrl.deleteEvent);


var sportCtrl = require('../controllers/sportController.js');
//sport routes
router.post('/api/sports',sportCtrl.addSport);
router.get('/api/sports/:id',sportCtrl.viewSport);
router.get('/api/sports',sportCtrl.viewAllSport);
router.put('/api/sports/:id',sportCtrl.updateSport);
router.delete('/api/sports/:id',sportCtrl.deleteSport);

var gameCtrl = require('../controllers/gameController.js');
//game routes
router.post('/api/games',gameCtrl.addGame);
router.get('/api/games/:id',gameCtrl.viewGame);
router.get('/api/games',gameCtrl.viewAllGame);
router.put('/api/games/:id',gameCtrl.updateGame);
router.delete('/api/games/:id',gameCtrl.deleteGame);

var teamCtrl = require('../controllers/teamController.js');

router.post('/api/teams/addTeam', teamCtrl.addTeam);
router.get('/api/teams', teamCtrl.viewAllTeam);
router.get('/api/teams/:id', teamCtrl.viewTeam);
router.put('/api/teams/:id', teamCtrl.updateTeam);
router.delete('/api/teams/:id', teamCtrl.deleteTeam);

router.get('/api/teams/getAllIsComposedOf', teamCtrl.getAllIsComposedOf);
router.get('/api/teams/getIsComposedOf/:id', teamCtrl.getIsComposedOf);
router.post('/api/teams/addIsComposedOf', teamCtrl.addIsComposedOf);
router.delete('/api/teams/isComposedOf/:id', teamCtrl.deleteIsComposedOf);

var venueCtrl = require('../controllers/venueController.js');

router.post('/api/venues/addVenue', venueCtrl.addVenue);
router.get('/api/venues', venueCtrl.viewAllVenue);
router.get('/api/venues/:id', venueCtrl.viewVenue);
router.put('/api/venues/updateVenue', venueCtrl.updateVenue);
router.delete('/api/venues/:id', venueCtrl.deleteVenue);

module.exports = router;
