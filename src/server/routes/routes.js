'use strict'

var express = require('express');
var router = express.Router();

//insert routes here

var institutionController = require('../controllers/institutionController.js');
router.post('/addSponsoringInstitution',institutionController.addSponsoringInstitution);
router.post('/viewSponsoringInstitution',institutionController.viewSponsoringInstitution);
router.post('/viewAllSponsoringInstitution',institutionController.viewAllSponsoringInstitution);
router.put('/updateSponsoringInstitution',institutionController.updateSponsoringInstitution);
router.delete('/deleteSponsoringInstitution',institutionController.deleteSponsoringInstitution);

module.exports = router;

