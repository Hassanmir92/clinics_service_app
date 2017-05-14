var request = require('request');
var utils   = require('../utils/utils');

function clinicsPostcode(req, res) {
  // Taking the first partial of postcode before the space
  var partial_postcode = req.params.postcode.split(" ")[0];

  // Calling the clinic postcode resource using the partial postcode
  request("https://data.gov.uk/data/api/service/health/clinics/partial_postcode?partial_postcode=" + partial_postcode, function(error, response, body) {
    var body = JSON.parse(body);

    var results = utils.matchFullPostcodeFilter(body.result, req.params.postcode);

    res.status(response.statusCode).json({ "results": results });
  });
};

function clinicsCity(req, res) {
  var city = req.params.city

  // Calling the clinic city resource using the city name given as a parameter
  request("https://data.gov.uk/data/api/service/health/clinics?city=" + city, function(error, response, body) {
    var body = JSON.parse(body);

    var results = utils.partialPostcodeCounter(body.result);

    res.status(response.statusCode).json({ "results": results });
  });
};

module.exports = {
  clinicsPostcode: clinicsPostcode,
  clinicsCity:     clinicsCity
}
