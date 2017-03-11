'use strict'

var express = require('express');
var router = express.Router();

//insert routes here

var sampleCtrl = require('../controllers/sampleController.js');
router.get('/getAccount',sampleCtrl.getAccount);

/*
EXAMPLE 
var sampleCtrl = require('../controllers/sampleController.js');
router.post('/getSomething', sampleCtrl.getSomething);
router.post('/insertSomething', sampleCtrl.insertSomething);
*/

module.exports = router;

