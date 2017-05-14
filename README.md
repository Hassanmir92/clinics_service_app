# Clinics Service App

Small microservice that provides data on UK clinics through two endpoints.

The service will consume these freely available resources:
- https://data.gov.uk/data/api/service/health/clinics?city=
- https://data.gov.uk/data/api/service/health/clinics/partial_postcode?partial_postcode=

##### Postcode endpoint:
`/clinics/postcode/:postcode`

Provides a JSON response with results that match the full postcode.
Each result item should include:
 - organisation_id
 - name

Example response:
```
{
    results: [{
        organisation_id: "40957",
        name: "Dodds Clinic"
    },
    {
        organisation_id: "40755",
        name: "Battersea Clinic"
    }]
}
```

##### City endpoint:
`/clinics/city/:city`

Provides a JSON response with a results object that contains all of the partial_postcodes found and how many of them where found.

Example response:
```
{
    results: {
        N9: 4,
        EC3N: 2,
        W5: 7,
        W1T: 5,
        SW2: 2
    }
}
```
