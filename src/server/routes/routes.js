'use strict'

var express = require('express');
var router = express.Router();

//insert routes here

var userCtrl = require('../controllers/userController.js');
//User Account routes
router.post('/getAccount', userCtrl.getAccount);
router.post('/login', userCtrl.loginUser);
router.post('/signup', userCtrl.addUser);
//User routes
router.post('/addUser', userCtrl.addUser);
router.post('/getUsers', userCtrl.getUsers);
router.post('/getUser', userCtrl.getUser);
//router.put('/updateUser', userCtrl.updateUser);
router.delete('/deleteUser', userCtrl.deleteUser);


module.exports = router;

