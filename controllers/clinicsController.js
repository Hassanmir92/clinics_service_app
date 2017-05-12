var request = require('request');

function clinicsPostcode(req, res) {
  // Taking the first partial of postcode before the space
  var partial_postcode = req.params.postcode.split(" ")[0];

  // Calling the clinic postcode resource using the partial postcode
  request("https://data.gov.uk/data/api/service/health/clinics/partial_postcode?partial_postcode=" + partial_postcode, function(error, response, body) {
    var body = JSON.parse(body);

    // Filter out results matching the full postcode and return with wanted attributes
    var results = body.result.filter(function (clinic) {
      return clinic.postcode == req.params.postcode;
    }).map(function (clinic) {
      return {
        organisation_id: clinic.organisation_id,
        name: clinic.name
      };
    });

    res.status(response.statusCode).json({ "results": results });
  });
};

function clinicsCity(req, res) {
  var city = req.params.city

  // Calling the clinic city resource using the city name given as a parameter
  request("https://data.gov.uk/data/api/service/health/clinics?city=" + city, function(error, response, body) {
    var body = JSON.parse(body);
    var results = {};

    // Iterating through results to create a new object with all partial_postcodes found and how many of them where found
    body.result.forEach(function(clinic) {
      if (results[clinic.partial_postcode]) {
        results[clinic.partial_postcode] += 1;
      } else {
        results[clinic.partial_postcode] = 1;
      }
    });

    res.status(response.statusCode).json({ "results": results });
  });
};

module.exports = {
  clinicsPostcode: clinicsPostcode,
  clinicsCity:     clinicsCity
}
