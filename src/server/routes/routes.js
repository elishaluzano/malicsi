'use strict'

var express = require('express');
var router = express.Router();

//insert routes here

var userCtrl = require('../controllers/userController.js');
router.get('/getAccount', userCtrl.getAccount);
router.get('/login', userCtrl.loginUser);
router.get('/signup', userCtrl.addUser);

var userInfoCtrl = require('../controllers/userInfoController.js');

/*
EXAMPLE 
var sampleCtrl = require('../controllers/sampleController.js');
router.post('/getSomething', sampleCtrl.getSomething);
router.post('/insertSomething', sampleCtrl.insertSomething);
*/

module.exports = router;

