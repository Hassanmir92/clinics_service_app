var express = require('express');
var request = require('request');

var app = express();

app.get('/clinics/postcode/:postcode', function (req, res) {
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

    res.status(response.statusCode).json({ "results": results })
  });
});

app.listen(3000, function () {
  console.log('App listening on port 3000');
});
