var expect = require('expect');
var utils  = require('../utils/utils');

var data = {
  "success": true,
  "result": [{
    "website": "",
    "sub_type": "UNKNOWN",
    "postcode": "CR9 1PJ",
    "phone": "",
    "partial_postcode": "CR9",
    "organisation_type": "Clinic",
    "organisation_status": "Visible",
    "organisation_id": "58961",
    "organisation_code": "NV1G7",
    "name": "Edridge Road Community Health Centre",
    "longitude": "-0.0991206094622612",
    "latlong": {
      "type": "Point",
      "crs": {
        "type": "name",
        "properties": {
          "name": "EPSG4326"
        }
      },
      "coordinates": [-0.0991206094622612, 51.37049102783203]
    },
    "latitude": "51.370491027832031",
    "is_pims_managed": "False",
    "fax": "",
    "email": "",
    "county": "Surrey",
    "city": "Croydon",
    "address3": "",
    "address2": "2 Edridge Road",
    "address1": "Impact House"
  },
  {
    "website": "",
    "sub_type": "UNKNOWN",
    "postcode": "CR0 6SD",
    "phone": "",
    "partial_postcode": "CR0",
    "organisation_type": "Clinic",
    "organisation_status": "Visible",
    "organisation_id": "59486",
    "organisation_code": "NLG06",
    "name": "East Croydon Medical Centre",
    "longitude": "-0.08744000643491745",
    "latlong": {
      "type": "Point",
      "crs": {
        "type": "name",
        "properties": {
          "name": "EPSG4326"
        }
      },
      "coordinates": [-0.08744000643491745, 51.37532043457031]
    },
    "latitude": "51.375320434570312",
    "is_pims_managed": "False",
    "fax": "",
    "email": "",
    "county": "Surrey",
    "city": "Croydon",
    "address3": "",
    "address2": "",
    "address1": "59 Addiscombe Road"
  },
  {
    "website": "",
    "sub_type": "UNKNOWN",
    "postcode": "CR0 7LR",
    "phone": "",
    "partial_postcode": "CR0",
    "organisation_type": "Clinic",
    "organisation_status": "Visible",
    "organisation_id": "68515",
    "organisation_code": "RJ602",
    "name": "Shirley Clinic",
    "longitude": "-6.0672726482152939E-2",
    "latlong": {
      "type": "Point",
      "crs": {
        "type": "name",
        "properties": {
          "name": "EPSG4326"
        }
      },
      "coordinates": [-0.06067272648215294, 51.37765884399414]
    },
    "latitude": "51.377658843994141",
    "is_pims_managed": "False",
    "fax": "",
    "email": "",
    "county": "Surrey",
    "city": "Croydon",
    "address3": "",
    "address2": "",
    "address1": "135 Shirley Road"
  },
  {
    "website": "",
    "sub_type": "UNKNOWN",
    "postcode": "CR0 0JA",
    "phone": "",
    "partial_postcode": "CR0",
    "organisation_type": "Clinic",
    "organisation_status": "Visible",
    "organisation_id": "68516",
    "organisation_code": "RJ615",
    "name": "Parkway Health Centre",
    "longitude": "-1.8528496846556664E-2",
    "latlong": {
      "type": "Point",
      "crs": {
        "type": "name",
        "properties": {
          "name": "EPSG4326"
        }
      },
      "coordinates": [-0.018528496846556664, 51.344337463378906]
    },
    "latitude": "51.344337463378906",
    "is_pims_managed": "False",
    "fax": "",
    "email": "",
    "county": "Surrey",
    "city": "Croydon",
    "address3": "",
    "address2": "New Addington",
    "address1": "Parkway"
  },
  {
    "website": "",
    "sub_type": "UNKNOWN",
    "postcode": "CR0 6SD",
    "phone": "",
    "partial_postcode": "CR0",
    "organisation_type": "Clinic",
    "organisation_status": "Visible",
    "organisation_id": "72374",
    "organisation_code": "NV169",
    "name": "East Croydon Medical Practice",
    "longitude": "-0.08744000643491745",
    "latlong": {
      "type": "Point",
      "crs": {
        "type": "name",
        "properties": {
          "name": "EPSG4326"
        }
      },
      "coordinates": [-0.08744000643491745, 51.37532043457031]
    },
    "latitude": "51.375320434570312",
    "is_pims_managed": "False",
    "fax": "",
    "email": "",
    "county": "Surrey",
    "city": "Croydon",
    "address3": "",
    "address2": "",
    "address1": "59 Addiscombe Road"
  },
  {
    "website": "",
    "sub_type": "UNKNOWN",
    "postcode": "CR0 1FE",
    "phone": "",
    "partial_postcode": "CR0",
    "organisation_type": "Clinic",
    "organisation_status": "Visible",
    "organisation_id": "74171",
    "organisation_code": "NX122",
    "name": "Edridge Road Community Health Centre",
    "longitude": "-9.8085373640060425E-2",
    "latlong": {
      "type": "Point",
      "crs": {
        "type": "name",
        "properties": {
          "name": "EPSG4326"
        }
      },
      "coordinates": [-0.09808537364006042, 51.37051010131836]
    },
    "latitude": "51.370510101318359",
    "is_pims_managed": "False",
    "fax": "",
    "email": "",
    "county": "Surrey",
    "city": "Croydon",
    "address3": "",
    "address2": "2 Edridge Road",
    "address1": "Impact House"
  },
  {
    "website": "",
    "sub_type": "UNKNOWN",
    "postcode": "CR9 1PJ",
    "phone": "020 3040 0800",
    "partial_postcode": "CR9",
    "organisation_type": "Clinic",
    "organisation_status": "Visible",
    "organisation_id": "77668",
    "organisation_code": "YDC09",
    "name": "Edridge Road Walk-In Centre",
    "longitude": "-0.0991206094622612",

    "latlong": {
      "type": "Point",
      "crs": {
        "type": "name",
        "properties": {
          "name": "EPSG4326"
        }
      },
      "coordinates": [-0.0991206094622612, 51.37049102783203]
    },
    "latitude": "51.370491027832031",
    "is_pims_managed": "True",
    "fax": "",
    "email": "",
    "county": "Surrey",
    "city": "Croydon",
    "address3": "",
    "address2": "2 Edridge Road",
    "address1": "Impact House"
  },
  {
    "website": "",
    "sub_type": "UNKNOWN",
    "postcode": "CR0 6SD",
    "phone": "",
    "partial_postcode": "CR0",
    "organisation_type": "Clinic",
    "organisation_status": "Visible",
    "organisation_id": "1349859",
    "organisation_code": "NTG62",
    "name": "Marie Stopes UK Croydon Clinic",
    "longitude": "-0.08744000643491745",
    "latlong": {
      "type": "Point",
      "crs": {

        "type": "name",
        "properties": {
          "name": "EPSG4326"
        }
      },
      "coordinates": [-0.08744000643491745,51.37532043457031]
    },
    "latitude": "51.375320434570312",
    "is_pims_managed": "True",
    "fax": "",
    "email": "",
    "county": "Surrey",
    "city": "Croydon",
    "address3": "",
    "address2": "59 Addiscombe Road",
    "address1": "East Croydon Medical Centre"
  },
  {
    "website": "http://croydonmiu.co.uk/#home",
    "sub_type": "UNKNOWN",
    "postcode": "CR0 0JA",
    "phone": "020 8251 7225",
    "partial_postcode": "CR0",
    "organisation_type": "Clinic",
    "organisation_status": "Visible",
    "organisation_id": "2026677",
    "organisation_code": "AF003",
    "name": "Parkway Minor Injuries Unit",
    "longitude": "-1.8528496846556664E-2",
    "latlong": {
      "type": "Point",
        "crs": {
        "type": "name",
        "properties": {
        "name": "EPSG4326"
        }
      },
      "coordinates": [-0.018528496846556664, 51.344337463378906]
    },
    "latitude": "51.344337463378906",
    "is_pims_managed": "True",
    "fax": "",
    "email": "",
    "county": "Surrey",
    "city": "Croydon",
    "address3": "New Addington",
    "address2": "Parkway Health Centre",
    "address1": "Parkway Minor Injuries Unit"
    },
    {
      "website": "http://www.slam.nhs.uk",
      "sub_type": "UNKNOWN",
      "postcode": "CR0 1QG",
      "phone": "020 3228 6000",
      "partial_postcode": "CR0",
      "organisation_type": "Clinic",
      "organisation_status": "Visible",
      "organisation_id": "3775563",
      "organisation_code": "RV5XB",
      "name": "Christopher Wren House",
      "longitude": "-0.09965050220489502",
      "latlong": {
        "type": "Point",
        "crs": {
          "type": "name",
          "properties": {
            "name": "EPSG4326"
          }
        },
        "coordinates": [-0.09965050220489502, 51.37018585205078]
      },
      "latitude": "51.370185852050781",
      "is_pims_managed": "True",
      "fax": "",
      "email": "",
      "county": "",
      "city": "Croydon",
      "address3": "",
      "address2": "113 High Street",
      "address1": ""

    }
  ]
}

it('should match full postcode return result with organisation_id & name', function() {
  var results = utils.matchFullPostcodeFilter(data.result, "CR9 1PJ");

  expect(results).toEqual([ { organisation_id: '58961',
      name: 'Edridge Road Community Health Centre' },
    { organisation_id: '77668',
      name: 'Edridge Road Walk-In Centre' }
  ]);
});

it('contains all of the partial_postcodes found and how many of them where found', function() {
  var results = utils.partialPostcodeCounter(data.result);

  expect(results).toEqual({ "CR9": 2, "CR0": 8 });
});
