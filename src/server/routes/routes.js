'use strict'

var express = require('express');
var router = express.Router();

//insert routes here

var userCtrl = require('../controllers/userController.js');
//User Account routes
router.post('/apiGetAccount', userCtrl.getAccount);
router.post('/apiLogin', userCtrl.loginUser);
router.post('/apiSignup', userCtrl.addUser);
//User routes
router.post('/apiAddUser', userCtrl.addUser);
router.post('/apiGetUsers', userCtrl.getUsers);
router.post('/apiGetUser', userCtrl.getUser);
//router.put('/updateUser', userCtrl.updateUser);
router.delete('/apiDeleteUser', userCtrl.deleteUser);


module.exports = router;

