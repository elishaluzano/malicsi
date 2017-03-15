'use strict'

var express = require('express');
var router = express.Router();

//insert routes here

var institutionController = require('../controllers/institutionController.js');
router.post('/api/institutions/addSponsoringInstitution',institutionController.addSponsoringInstitution);
router.get('/api/institutions/:institution_id',institutionController.viewSponsoringInstitution);
router.get('/api/institutions',institutionController.viewAllSponsoringInstitution);
router.put('/api/institutions/updateSponsoringInstitution',institutionController.updateSponsoringInstitution);
router.delete('/api/institutions/delete/:institution_id',institutionController.deleteSponsoringInstitution);



module.exports = router;

