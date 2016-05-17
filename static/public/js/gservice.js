'use strict';

angular.module('gservice', [])
    .factory('gservice', function($http) {

        var googleMapService = {};

        var locations = [];

        var selectedLat = 47.7511;
        var selectedLong = -120.7401;

        googleMapService.refresh = function(latitude, longitude) {
            console.log("Refreshing google maps service");
            selectedLat = latitude;
            selectedLong = longitude;

            initialize(latitude, longitude);
        };

        googleMapService.loadJSON = function (url) {
            google.maps.loadGeoJson(url);
        };

        var convertToMapPoints = function(response) {
            var locations = [];

            console.log(response);
            return locations;
        };


        var initialize = function(latitude, longitude) {

            var myLatLng = {lat: selectedLat, lng: selectedLong};

            // If map has not been created already...
            if (!map) {
                var styleArray = [
                    {
                        featureType: "all",
                        stylers: [
                            { saturation: 0 }
                        ]
                    },{
                        featureType: "road",
                        stylers: [
                            { visibility: 'off'}
                        ]
                    }
                ];

                var map = new google.maps.Map(document.getElementById('map'), {
                    center: myLatLng,
                    styles: styleArray,
                    mapTypeId: google.maps.MapTypeId.TERRAIN,
                    zoom: 7
                });

                // map.data.loadGeoJson("../map/Tribal_Lands.json");

                map.data.loadGeoJson("../map/washington.json");

                map.data.setStyle(function(feature) {
                    var color = 'blue';
                    var strokeWeight = 0.5;

                    var LAND_TYPE = feature.getProperty('LAND_TYPE');
                    if (LAND_TYPE == 'ceded land') {
                        color = 'yellow';
                    } else if (LAND_TYPE == 'reservation') {
                        color = 'blue';
                    } else if (LAND_TYPE == 'disputed') {
                        color = 'red';
                    } else {
                        color = 'orange';
                    }
                    return /** @type (google.maps.Data.StyleOptions) */({
                        fillColor: color,
                        strokeColor: '#000',
                        strokeWeight: strokeWeight
                    });
                });

                var infoWindow;

                map.data.addListener('click', function(e) {
                    console.log(e);
                    // console.log(e.feature.getGeometry());
                    if (infoWindow) {
                        infoWindow.close();
                    }
                    infoWindow = new google.maps.InfoWindow({
                        content: e.feature.getProperty('TRIBAL_NM'),
                        position: e.latLng
                    });
                    infoWindow.open(map);
                });
            }
        };

    // Refresh the page upon window load
    google.maps.event.addDomListener(window, 'load',
        googleMapService.refresh(selectedLat, selectedLong));

    return googleMapService;
});