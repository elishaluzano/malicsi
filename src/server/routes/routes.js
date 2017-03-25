'use strict'

var express = require('express');
var router = express.Router();

var userCtrl = require('../controllers/userController.js');
//user account routes
router.post('/api/login', userCtrl.loginUser);
router.post('/api/sessions', userCtrl.getAccount);
router.post('/api/users', userCtrl.addUser);
router.post('/api/logout', userCtrl.logout);
//user routes
router.get('/api/users', userCtrl.getUsers);
router.get('/api/users/:id', userCtrl.getUser);
router.put('/api/users/:id', userCtrl.updateUser);
router.delete('/api/users/:id', userCtrl.deleteUser);
//search users
//router.get('/api/users/search/:search', userCtrl.searchUsers);

var userAffiliationCtrl = require('../controllers/userAffiliationController.js');
//user affiliation routes
router.get('/api/useraffiliations', userAffiliationCtrl.viewAllUserAffiliation);
router.get('/api/useraffiliations/:id', userAffiliationCtrl.viewUserAffiliation);
router.post('/api/useraffiliations', userAffiliationCtrl.addUserAffiliation);
router.put('/api/useraffiliations/:id', userAffiliationCtrl.updateUserAffiliation);
router.delete('/api/useraffiliations/:id/:affiliation', userAffiliationCtrl.deleteUserAffiliation);

var contactCtrl = require('../controllers/contactController.js');
//contact person in case of emergency routes
router.post('/api/contacts',contactCtrl.addContact);
router.get('/api/contacts/:id',contactCtrl.viewContact);
router.get('/api/contacts',contactCtrl.viewAllContact);
router.put('/api/contacts/:id',contactCtrl.updateContact);
router.delete('/api/contacts/:id',contactCtrl.deleteContact);

//admin routes
router.get('/api/checkAdmin/:id', userCtrl.checkAdmin);
router.get('/api/admins', userCtrl.getAdmins);
router.get('/api/admins/:id', userCtrl.getAdmin);
router.post('/api/admins', userCtrl.addAdmin);
router.delete('/api/admins/:institution_id/:user_id', userCtrl.deleteAdmin);

var userlogCtrl = require('../controllers/userlogController.js');
//userlog routes
router.post('/api/userlogs', userlogCtrl.addLog);
router.get('/api/userlogs', userlogCtrl.getUserlogs);
router.get('/api/userlogs/:id', userlogCtrl.getUserlog);

var institutionCtrl = require('../controllers/institutionController.js');
//institution routes
router.post('/api/institutions',institutionCtrl.addSponsoringInstitution);
router.get('/api/institutions/:id',institutionCtrl.viewSponsoringInstitution);
router.get('/api/institutions',institutionCtrl.viewAllSponsoringInstitution);
router.put('/api/institutions/:id',institutionCtrl.updateSponsoringInstitution);
router.delete('/api/institutions/:id',institutionCtrl.deleteSponsoringInstitution);

//get all events from an institution
router.get('/api/institutions/:id/events',institutionCtrl.viewEventsInInstitution);

var eventCtrl = require('../controllers/eventController.js');
//event routes
router.post('/api/events',eventCtrl.addEvent);
router.get('/api/events/:id',eventCtrl.viewEvent);
router.get('/api/events',eventCtrl.viewAllEvent);
router.put('/api/events/:id',eventCtrl.updateEvent);
router.delete('/api/events/:id',eventCtrl.deleteEvent);

//get all sports from an event
router.get('/api/events/:id/sports', eventCtrl.viewSportsInEvent);
//get all teams from an event
router.get('/api/events/:id/teams', eventCtrl.viewTeamsInEvent);
//get all games from an event
router.get('/api/events/:id/games', eventCtrl.viewGamesInEvent);

var sportCtrl = require('../controllers/sportController.js');
//sport routes
router.post('/api/sports',sportCtrl.addSport);
router.get('/api/sports/:id',sportCtrl.viewSport);
router.get('/api/sports',sportCtrl.viewAllSport);
router.put('/api/sports/:id',sportCtrl.updateSport);
router.delete('/api/sports/:id',sportCtrl.deleteSport);

//sport join routes
router.post('/api/teams/joins', sportCtrl.addJoin);
router.get('/api/teams/joins', sportCtrl.getAllJoins);
router.get('/api/teams/joins/:id', sportCtrl.getJoins);
router.delete('/api/teams/joins/:user_id/:sport_id', sportCtrl.deleteJoin);

var gameCtrl = require('../controllers/gameController.js');
//game routes
router.post('/api/games',gameCtrl.addGame);
router.get('/api/games/:id',gameCtrl.viewGame);
router.get('/api/games',gameCtrl.viewAllGame);
router.put('/api/games/:id',gameCtrl.updateGame);
router.delete('/api/games/:id',gameCtrl.deleteGame);

var teamCtrl = require('../controllers/teamController.js');
//team routes
router.post('/api/teams', teamCtrl.addTeam);
router.get('/api/teams', teamCtrl.viewAllTeam);
router.get('/api/teams/:id', teamCtrl.viewTeam);
router.put('/api/teams/:id', teamCtrl.updateTeam);
router.delete('/api/teams/:id', teamCtrl.deleteTeam);

//team isComposedOf routes
router.get('/api/teams/getAllIsComposedOf', teamCtrl.getAllIsComposedOf);
router.get('/api/teams/getIsComposedOf/:id', teamCtrl.getIsComposedOf);
router.post('/api/teams/addIsComposedOf', teamCtrl.addIsComposedOf);
router.delete('/api/teams/isComposedOf/:id', teamCtrl.deleteIsComposedOf);

//team-plays routes
router.get('/api/teams/plays', teamCtrl.getAllPlays);
router.get('/api/teams/plays/:id', teamCtrl.getPlays);
router.post('/api/teams/plays', teamCtrl.addPlays);
router.delete('/api/teams/plays/:id/:game', teamCtrl.deletePlays);

//team-wins routes
router.get('/api/teams/wins', teamCtrl.getAllWins);
router.get('/api/teams/wins/:id', teamCtrl.getWins);
router.post('/api/teams/wins', teamCtrl.addWins);
router.delete('/api/teams/wins/:id/:game', teamCtrl.deleteWins);

var venueCtrl = require('../controllers/venueController.js');
//venue routes
router.post('/api/venues', venueCtrl.addVenue);
router.get('/api/venues', venueCtrl.viewAllVenue);
router.get('/api/venues/:id', venueCtrl.viewVenue);
router.put('/api/venues/:id', venueCtrl.updateVenue);
router.delete('/api/venues/:id', venueCtrl.deleteVenue);

module.exports = router;