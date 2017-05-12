var express  = require('express');
var router   = express.Router();

var clinicsController = require('../controllers/clinicsController');

router.route('/clinics/postcode/:postcode')
  .get(clinicsController.clinicsPostcode)

router.route('/clinics/city/:city')
  .get(clinicsController.clinicsCity)

module.exports = router;
