"use strict";

var rp = require('request-promise');
var cheerio = require('cheerio');

var urls = {
    "emitters" : "http://impact.brighterplanet.com/emitters.json",
    "certified_emitters" : "http://certified.impact.brighterplanet.com/emitters.json",
    "protocols" : "http://impact.brighterplanet.com/protocols.json",
    "automobiles_options" : "http://impact.brighterplanet.com/automobiles/options.json",
    "automobile_trips_options" : "http://impact.brighterplanet.com/automobile_trips/options.json",
    "bus_trips_options" : "http://impact.brighterplanet.com/bus_trips/options.json",
    "computations_options" : "http://impact.brighterplanet.com/computations/options.json",
    "diets_options" : "http://impact.brighterplanet.com/diets/options.json",
    "electricity_uses_options" : "http://impact.brighterplanet.com/electricity_uses/options.json",
    "flights_options" : "http://impact.brighterplanet.com/flights/options.json",
    "fuel_purchases_options" : "http://impact.brighterplanet.com/fuel_purchases/options.json",
    "lodgings_options" : "http://impact.brighterplanet.com/lodgings/options.json",
    "meetings_options" : "http://impact.brighterplanet.com/meetings/options.json",
    "motorcycles_options" : "http://impact.brighterplanet.com/motorcycles/options.json",
    "pets_options" : "http://impact.brighterplanet.com/pets/options.json",
    "purchases_options" : "http://impact.brighterplanet.com/purchases/options.json",
    "rail_trips_options" : "http://impact.brighterplanet.com/rail_trips/options.json",
    "residences_options" : "http://impact.brighterplanet.com/residences/options.json",
    "shipments_options" : "http://impact.brighterplanet.com/shipments/options.json",
    "automobiles_committees" : "http://impact.brighterplanet.com/automobiles/committees.json",
    "automobile_trips_committees" : "http://impact.brighterplanet.com/automobile_trips/committees.json",
    "bus_trips_committees" : "http://impact.brighterplanet.com/bus_trips/committees.json",
    "computations_committees" : "http://impact.brighterplanet.com/computations/committees.json",
    "diets_committees" : "http://impact.brighterplanet.com/diets/committees.json",
    "electricity_uses_committees" : "http://impact.brighterplanet.com/electricity_uses/committees.json",
    "flights_committees" : "http://impact.brighterplanet.com/flights/committees.json",
    "fuel_purchases_committees" : "http://impact.brighterplanet.com/fuel_purchases/committees.json",
    "lodgings_committees" : "http://impact.brighterplanet.com/lodgings/committees.json",
    "meetings_committees" : "http://impact.brighterplanet.com/meetings/committees.json",
    "motorcycles_committees" : "http://impact.brighterplanet.com/motorcycles/committees.json",
    "pets_committees" : "http://impact.brighterplanet.com/pets/committees.json",
    "purchases_committees" : "http://impact.brighterplanet.com/purchases/committees.json",
    "rail_trips_committees" : "http://impact.brighterplanet.com/rail_trips/committees.json",
    "residences_committees" : "http://impact.brighterplanet.com/residences/committees.json",
    "shipments_committees" : "http://impact.brighterplanet.com/shipments/committees.json"
};

var opts = {
    simple: false,
    resolveWithFullResponse: true,
    json: true
};

Object.keys(urls).forEach(function(key, index) {
    opts.uri = urls[key];
    console.dir(opts);
    console.log('\n\n');
    rp(opts)
        .then(function(response) {
            console.log('Response: ' + index);
            console.dir(response.body);
        })
        .catch(function(err) {
            console.log('Error fetching urls');
        })
});

//for (var key in urls) {
//    rp(opts)
//        .then(function(response) {
//            console.log('Status Code ' + response.statusCode);
//            console.log('Entity:' + key);
//
//            var data = response.body;
//            console.dir(data);
//            console.log('\n\n');
//        })
//        .catch(function(err) {
//            console.error(err);
//        });
//};
//



