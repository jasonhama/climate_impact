(function () {
    'use strict';

    var addCtrl = angular.module('addCtrl', []);

    addCtrl.controller('addCtrl', function($scope, $http) {
        console.log('Hello');

        // NgMap.getMap().then(function (map) {
        //     console.log(map.getCenter());
        //     console.log('markers', map.markers);
        //     console.log('shapes', map.shapes);
        // });
        var map;

        function InitializeComponents() {
            console.log('Initializing components...');

            var styleArray = [
                {
                    featureType: "all",
                    stylers: [
                        { saturation: -80 }
                    ]
                }
            ];

            var mapOptions = {
                zoom: 7,
                center: {lat: 47.7511, lng: -120.7401},
                styles: styleArray
            };

            map = new google.maps.Map(document.getElementById('map'), mapOptions);

            map.data.loadGeoJson("../map/washington.json");
        }

        var styleArray = [
            {
                featureType: "all",
                stylers: [
                    { saturation: -80 }
                ]
            }
        ];


        InitializeComponents();

    });
})();