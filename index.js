var express = require('express');
var request = require("request");

var app = express();

app.get('/clinics/postcode/:postcode', function (req, res) {
  var response = request("https://data.gov.uk/data/api/service/health/clinics/partial_postcode?partial_postcode=" + req.params.postcode, function(error, response, body) {
    var body = JSON.parse(body);

    res.status(response.statusCode).json({ "response": body })
  });
});

app.listen(3000, function () {
  console.log('App listening on port 3000');
});
