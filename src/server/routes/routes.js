'use strict'

var express = require('express');
var router = express.Router();

//uploader
var uploadCtrl = require('../controllers/uploadController.js');

var userCtrl = require('../controllers/userController.js');
//user account routes
router.post('/api/login', userCtrl.loginUser);
router.post('/api/sessions', userCtrl.getAccount);
router.post('/api/users', uploadCtrl.upload.single('profile_pic'), userCtrl.addUser);
router.post('/api/logout', userCtrl.logout);
//user routes
router.get('/api/users', userCtrl.getUsers);
router.get('/api/users/:id', userCtrl.getUser);
router.get('/api/users/search/:search', userCtrl.searchUser);
router.put('/api/users/:id', uploadCtrl.upload.single('profile_pic'), userCtrl.updateUser);
router.delete('/api/users/:id', userCtrl.deleteUser);

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
router.get('/api/checkAdminOfTeam/:user_id/:team_id', userCtrl.checkAdminOfTeam);
router.get('/api/admins/:id/institutions', userCtrl.getInstitutionByAdmin);
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
router.post('/api/institutions',uploadCtrl.upload.single('picture'),institutionCtrl.addSponsoringInstitution);
router.get('/api/institutions/:id',institutionCtrl.viewSponsoringInstitution);
router.get('/api/institutions',institutionCtrl.viewAllSponsoringInstitution);
router.get('/api/institutions/search/:search', institutionCtrl.searchSponsoringInstitution);
router.put('/api/institutions/:id',uploadCtrl.upload.single('picture'),institutionCtrl.updateSponsoringInstitution);
router.delete('/api/institutions/:id',institutionCtrl.deleteSponsoringInstitution);

//get all events from an institution
router.get('/api/institutions/:id/events',institutionCtrl.viewEventsInInstitution);

var eventCtrl = require('../controllers/eventController.js');
//event routes
router.post('/api/events/sports/', eventCtrl.addSportToEvent);
router.post('/api/events',uploadCtrl.upload.single('picture'), eventCtrl.addEvent);
router.get('/api/events/:id',eventCtrl.viewEvent);
router.get('/api/events',eventCtrl.viewAllEvent);
router.get('/api/events/search/:search', eventCtrl.searchEvent);
router.put('/api/events/:id',uploadCtrl.upload.single('picture'), eventCtrl.updateEvent);
router.delete('/api/events/:id',eventCtrl.deleteEvent);
router.delete('/api/events/:event_id/sports/:sport_id', eventCtrl.deleteSportOfEvent);

//get all event details from an event
router.get('/api/events/:id/generalnformation', eventCtrl.viewEventDetails);

//get all sports from an event
router.get('/api/events/:id/sports', eventCtrl.viewSportsInEvent);
//get all teams from an event
router.get('/api/events/:id/teams', eventCtrl.viewTeamsInEvent);
//get all games from an event
router.get('/api/events/:id/games', eventCtrl.viewGamesInEvent);
//get all games from a sport from an event
router.get('/api/events/:event_id/sports/:sport_id/games', eventCtrl.viewGamesInSportInEvent);
//get general information of an event
router.get('/api/events/:id/info', eventCtrl.viewGeneralInformation);
//get general information of an event
router.get('/api/events/:id/eventinfo', eventCtrl.viewDoneEventInfo);

var sportCtrl = require('../controllers/sportController.js');
//sport routes
router.post('/api/sports',sportCtrl.addSport);
router.get('/api/sports/:id',sportCtrl.viewSport);
router.get('/api/sports',sportCtrl.viewAllSport);
router.get('/api/sports/search/:search',sportCtrl.searchSport);
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

//get all teams from specific game
router.get('/api/games/:id/teams',gameCtrl.viewTeamsInGame);
router.get('/api/games/:id/gameinfo',gameCtrl.viewGamesInformation);

var teamCtrl = require('../controllers/teamController.js');
//team routes
router.post('/api/teams', uploadCtrl.upload.single('picture'), teamCtrl.addTeam);
router.get('/api/teams', teamCtrl.viewAllTeam);
router.get('/api/teams/:id/oneteamplaysgame', teamCtrl.viewOneTeamPlaysGame);
router.get('/api/teams/:id/getTeamsofUser', teamCtrl.getTeamsOfUser);
router.get('/api/teams/:id/getTeamStats', teamCtrl.getTeamStats);
router.get('/api/teams/teamplaysgame', teamCtrl.viewAllTeamPlaysGame);
router.get('/api/teams/:id', teamCtrl.viewTeam);
router.get('/api/teams/search/:search', teamCtrl.searchTeam);
router.put('/api/teams/:id', uploadCtrl.upload.single('picture'), teamCtrl.updateTeam);
router.delete('/api/teams/:id', teamCtrl.deleteTeam);
router.get('/api/teams/:id/allgameinfo', teamCtrl.getAllGameInfo);

//team isComposedOf routes
router.get('/api/teams/composedOf', teamCtrl.getAllIsComposedOf);
//get all users from a specific team
router.get('/api/teams/:id/users', teamCtrl.getIsComposedOf);
router.get('/api/teams/:user_id/userofteam/:team_id', teamCtrl.getIsUserOfTeam);
router.post('/api/teams/composedOf', teamCtrl.addIsComposedOf);
router.delete('/api/teams/composedOf/:team_id/:user_id', teamCtrl.deleteIsComposedOf);

//team-plays routes
router.get('/api/teams/plays', teamCtrl.getAllPlays);
//get all games from a specific team
router.get('/api/teams/:id/plays/', teamCtrl.getPlays);//get all teams from a specific game
router.post('/api/teams/plays', teamCtrl.addPlays);
router.put('/api/teams/plays/:team_id/:game_id',teamCtrl.updatePlays);
router.delete('/api/teams/plays/:id/:game', teamCtrl.deletePlays);

var venueCtrl = require('../controllers/venueController.js');
//venue routes
router.post('/api/venues', venueCtrl.addVenue);
router.get('/api/venues', venueCtrl.viewAllVenue);
router.get('/api/venues/:id', venueCtrl.viewVenue);
router.get('/api/venues/search/:search', venueCtrl.searchVenue);
router.put('/api/venues/:id', venueCtrl.updateVenue);
router.delete('/api/venues/:id', venueCtrl.deleteVenue);

var gameLogCtrl = require('../controllers/gameUpdateController.js');
//game update log routes
router.get('/api/gamelogs', gameLogCtrl.viewAllGamelogs);
router.get('/api/gamelogs/:id', gameLogCtrl.viewGamelogsOfGame);
router.post('/api/gamelogs', gameLogCtrl.addGameLog);
router.put('/api/gamelogs/:id', gameLogCtrl.updateGameLog);
router.delete('/api/gamelogs/:id', gameLogCtrl.deleteGameLog);
module.exports = router;
