'use strict'

var express = require('express');
var router = express.Router();

//uploader
var uploadCtrl = require('../controllers/uploadController.js');
//user
var userCtrl = require('../controllers/userController.js');
// contact persons
var contactCtrl = require('../controllers/contactController.js');
//userAffiliations
var userAffiliationCtrl = require('../controllers/userAffiliationController.js');
//institutions 
var institutionCtrl = require('../controllers/institutionController.js');
//events
var eventCtrl = require('../controllers/eventController.js');
//sports 
var sportCtrl = require('../controllers/sportController.js');
//games 
var gameCtrl = require('../controllers/gameController.js');
//teams 
var teamCtrl = require('../controllers/teamController.js');
//venues
var venueCtrl = require('../controllers/venueController.js');

var gameLogCtrl = require('../controllers/gameUpdateController.js');

var userlogCtrl = require('../controllers/userlogController.js');
//get for users
router.post('/api/login', userCtrl.loginUser);
router.post('/api/sessions', userCtrl.getAccount);
router.post('/api/users', uploadCtrl.upload.single('profile_pic'), userCtrl.addUser);

//get for user affiliations
router.get('/api/useraffiliations', userAffiliationCtrl.viewAllUserAffiliation);
router.get('/api/useraffiliations/:id', userAffiliationCtrl.viewUserAffiliation);

//get for contact persons 
router.get('/api/contacts/:id',contactCtrl.viewContact);
router.get('/api/contacts',contactCtrl.viewAllContact);

//get for institutions
router.get('/api/institutions/:id',institutionCtrl.viewSponsoringInstitution);
router.get('/api/institutions',institutionCtrl.viewAllSponsoringInstitution);
//get all events from an institution
router.get('/api/institutions/:id/events',institutionCtrl.viewEventsInInstitution);
//search
router.get('/api/institutions/search/:search', institutionCtrl.searchSponsoringInstitution);

//get for events
router.get('/api/events/:id',eventCtrl.viewEvent);
router.get('/api/events',eventCtrl.viewAllEvent);
//search
router.get('/api/events/search/:search', eventCtrl.searchEvent);
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

//get for sports 
router.get('/api/sports/:id',sportCtrl.viewSport);
router.get('/api/sports',sportCtrl.viewAllSport);
//search
router.get('/api/sports/search/:search',sportCtrl.searchSport);
//joins 
router.get('/api/teams/joins', sportCtrl.getAllJoins);
router.get('/api/teams/joins/:id', sportCtrl.getJoins);

//get for games 
router.get('/api/games/:id',gameCtrl.viewGame);
router.get('/api/games',gameCtrl.viewAllGame);

router.get('/api/games/:id/teams',gameCtrl.viewTeamsInGame);
router.get('/api/games/:id/gameinfo',gameCtrl.viewGamesInformation);

//get for teams
router.get('/api/teams', teamCtrl.viewAllTeam);
router.get('/api/teams/:id/oneteamplaysgame', teamCtrl.viewOneTeamPlaysGame);
router.get('/api/teams/:id/getTeamsofUser', teamCtrl.getTeamsOfUser);
router.get('/api/teams/:id/getTeamStats', teamCtrl.getTeamStats);
router.get('/api/teams/teamplaysgame', teamCtrl.viewAllTeamPlaysGame);
router.get('/api/teams/:id', teamCtrl.viewTeam);
router.get('/api/teams/search/:search', teamCtrl.searchTeam);
router.get('/api/teams/:id/allgameinfo', teamCtrl.getAllGameInfo);

router.get('/api/teams/composedOf', teamCtrl.getAllIsComposedOf);
//get all users from a specific team
router.get('/api/teams/:id/users', teamCtrl.getIsComposedOf);
router.get('/api/teams/:user_id/userofteam/:team_id', teamCtrl.getIsUserOfTeam);

router.get('/api/teams/plays', teamCtrl.getAllPlays);
//get all games from a specific team
router.get('/api/teams/:id/plays/', teamCtrl.getPlays);//get all teams from a specific game

//get all games of venues
router.get('/api/venues', venueCtrl.viewAllVenue);
router.get('/api/venues/:id', venueCtrl.viewVenue);
router.get('/api/venues/search/:search', venueCtrl.searchVenue);

router.get('/api/gamelogs', gameLogCtrl.viewAllGamelogs);
router.get('/api/gamelogs/:id/game', gameLogCtrl.viewGamelogsOfGame);
router.get('/api/gamelogs/:id', gameLogCtrl.viewGamelog);

router.get('/api/users', userCtrl.getUsers);
router.get('/api/users/:id', userCtrl.getUser);
router.get('/api/users/search/:search', userCtrl.searchUser);

//admin routes
router.get('/api/checkAdmin/:id', userCtrl.checkAdmin);
router.get('/api/checkAdminOfInstitution/:user_id/:institutiont_id', userCtrl.checkAdminOfInstitution);
router.get('/api/checkAdminOfEvent/:user_id/:event_id', userCtrl.checkAdminOfEvent);
router.get('/api/checkAdminOfGame/:user_id/:game_id', userCtrl.checkAdminOfGame);
router.get('/api/checkAdminOfTeam/:user_id/:team_id', userCtrl.checkAdminOfTeam);
router.get('/api/admins/:id/institutions', userCtrl.getInstitutionByAdmin);
router.get('/api/admins', userCtrl.getAdmins);
router.get('/api/admins/:id', userCtrl.getAdmin);

router.get('/api/userlogs', userlogCtrl.getUserlogs);
router.get('/api/userlogs/:id', userlogCtrl.getUserlog);

router.use(function(req, res, next) {
	if (req.session && req.session.user) {
		next();
	} else {
		res.redirect('/')
	}
});

//user account routes
router.post('/api/logout', userCtrl.logout);
//user routes
router.put('/api/users/:id', uploadCtrl.upload.single('profile_pic'), userCtrl.updateUser);
router.delete('/api/users/:id', userCtrl.deleteUser);

//user affiliation routes
router.post('/api/useraffiliations', userAffiliationCtrl.addUserAffiliation);
router.put('/api/useraffiliations/:id', userAffiliationCtrl.updateUserAffiliation);
router.delete('/api/useraffiliations/:id/:affiliation', userAffiliationCtrl.deleteUserAffiliation);

//contact person in case of emergency routes
router.post('/api/contacts',contactCtrl.addContact);
router.put('/api/contacts/:id',contactCtrl.updateContact);
router.delete('/api/contacts/:id',contactCtrl.deleteContact);

router.post('/api/admins', userCtrl.addAdmin);
router.delete('/api/admins/:institution_id/:user_id', userCtrl.deleteAdmin);

//userlog routes
router.post('/api/userlogs', userlogCtrl.addLog);

//institution routes
router.post('/api/institutions',uploadCtrl.upload.single('picture'),institutionCtrl.addSponsoringInstitution);
router.put('/api/institutions/:id',uploadCtrl.upload.single('picture'),institutionCtrl.updateSponsoringInstitution);
router.delete('/api/institutions/:id',institutionCtrl.deleteSponsoringInstitution);

//event routes
router.post('/api/events/sports/', eventCtrl.addSportToEvent);
router.post('/api/events',uploadCtrl.upload.single('picture'), eventCtrl.addEvent);
router.put('/api/events/:id',uploadCtrl.upload.single('picture'), eventCtrl.updateEvent);
router.delete('/api/events/:id',eventCtrl.deleteEvent);
router.delete('/api/events/:event_id/sports/:sport_id', eventCtrl.deleteSportOfEvent);

//sport routes
router.post('/api/sports',sportCtrl.addSport);
router.put('/api/sports/:id',sportCtrl.updateSport);
router.delete('/api/sports/:id',sportCtrl.deleteSport);

//sport join routes
router.post('/api/teams/joins', sportCtrl.addJoin);
router.delete('/api/teams/joins/:user_id/:sport_id', sportCtrl.deleteJoin);

//game routes
router.post('/api/games',gameCtrl.addGame);
router.put('/api/games/:id',gameCtrl.updateGame);
router.delete('/api/games/:id',gameCtrl.deleteGame);

//get all teams from specific game
router.put('/api/games/:id/endgame',gameCtrl.endGame);
router.put('/api/games/:id/opengame',gameCtrl.openGame);

//team routes
router.post('/api/teams', uploadCtrl.upload.single('picture'), teamCtrl.addTeam);
router.put('/api/teams/:id', uploadCtrl.upload.single('picture'), teamCtrl.updateTeam);
router.delete('/api/teams/:id', teamCtrl.deleteTeam);

//team isComposedOf routes
router.post('/api/teams/composedOf', teamCtrl.addIsComposedOf);
router.delete('/api/teams/composedOf/:team_id/:user_id', teamCtrl.deleteIsComposedOf);

//team-plays routes
router.post('/api/teams/plays', teamCtrl.addPlays);
router.put('/api/teams/plays/:team_id/:game_id',teamCtrl.updatePlays);
router.delete('/api/teams/plays/:id/:game', teamCtrl.deletePlays);

//venue routes
router.post('/api/venues', venueCtrl.addVenue);
router.put('/api/venues/:id', venueCtrl.updateVenue);
router.delete('/api/venues/:id', venueCtrl.deleteVenue);

//game update log routes
router.post('/api/gamelogs', gameLogCtrl.addGameLog);
router.put('/api/gamelogs/:id', gameLogCtrl.updateGameLog);
router.post('/api/gamelogs/:id', gameLogCtrl.deleteGameLog);
module.exports = router;
