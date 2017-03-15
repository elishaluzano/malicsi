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

var adminCtrl = require('../controllers/adminController.js');
//admin routes
router.get('/api/admins', adminCtrl.getAdmins);
router.get('/api/admins/:id', adminCtrl.getAdmin);
router.post('/api/admins/addAdmin', adminCtrl.addAdmin);
router.put('/api/admins/updateAdmin', adminCtrl.updateAdmin);
router.delete('api/admins/:id', adminCtrl.deleteAdmin);

var eventCtrl = require('../controllers/eventController.js');
//event routes
router.post('/api/events/addEvent',eventCtrl.addEvent);
router.get('/api/events/:event_id',eventCtrl.viewEvent);
router.get('/api/events',eventCtrl.viewAllEvent);
router.put('/api/events/updateEvent',eventCtrl.updateEvent);
router.delete('/api/events/:event_id',eventCtrl.deleteEvent);

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

module.exports = router;

