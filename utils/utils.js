function matchFullPostcodeFilter(jsonResult, fullPostcode) {

  // Filter out results matching the full postcode and return with wanted attributes
  var results = jsonResult.filter(function (clinic) {
    return clinic.postcode == fullPostcode;
  }).map(function (clinic) {
    return {
      organisation_id: clinic.organisation_id,
      name: clinic.name
    };
  });

  return results;
}

function partialPostcodeCounter(jsonResult) {
  var results = {};

  // Iterating through results to create a new object with all partial_postcodes found and how many of them where found
  jsonResult.forEach(function(clinic) {
    if (results[clinic.partial_postcode]) {
      results[clinic.partial_postcode] += 1;
    } else {
      results[clinic.partial_postcode] = 1;
    }
  });

  return results;
}

module.exports = {
  matchFullPostcodeFilter: matchFullPostcodeFilter,
  partialPostcodeCounter: partialPostcodeCounter
}
