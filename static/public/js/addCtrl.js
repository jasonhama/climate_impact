'use strict';

var addCtrl = angular.module('addCtrl', ['geolocation', 'gservice']);

addCtrl.controller('addCtrl', function($scope, $http, NgMap) {
    
    
    NgMap.getMap().then(function(map) {
        console.log("Loading GeoJson");
        map.data.loadGeoJson("../map/Drought_Areas_2015.json");
        console.log("done loading");

        map.data.setStyle(function(feature) {
            console.log("setting style..");
            console.log(feature);
            return {
                fillColor: 'red',
                strokeWeight: 1
            };
        });       
    });
});