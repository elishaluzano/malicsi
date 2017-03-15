'use strict'

var express = require('express');
var router = express.Router();

//insert routes here
var userCtrl = require('../controllers/userController.js');
//User Account routes
router.post('/api/login', userCtrl.loginUser);
router.post('/api/users/getAccount', userCtrl.getAccount);
router.post('/api/users/signup', userCtrl.addUser);
//User routes
router.get('/api/users/getUsers', userCtrl.getUsers);
router.get('/api/users/:id', userCtrl.getUser);
router.put('/api/users/updateUser', userCtrl.updateUser);
router.delete('/api/users/:id', userCtrl.deleteUser);

//Admin routes
var adminCtrl = require('../controllers/adminController.js');
router.get('/api/admins/getAdmins', adminCtrl.getAdmins);
router.get('/api/admins/getAdmin', adminCtrl.getAdmin);
router.post('/api/admins/addAdmin', adminCtrl.addAdmin);
router.put('/api/admins/updateAdmin', adminCtrl.updateAdmin);
router.delete('api/admins/:id', adminCtrl.deleteAdmin);

module.exports = router;

