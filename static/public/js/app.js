'use strict';

var app = angular.module('ClimateImpactApp', ['addCtrl', 'geolocation', 'ngMap', 'ngRoute'])
    
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        
        $routeProvider.when('/', {
            controller: 'addCtrl',
            templateUrl: 'partials/map.html',
        }).otherwise({redirectTo : '/'});
    });