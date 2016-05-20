"use strict";

var app = angular.module('ClimateApp', ['ngRoute', 'ngMaterial', 'firebase']);

app.run(["$rootScope", "$location", function($rootScope, $location) {

$rootScope.$on("$routeChangeError", function(event, next, previous, error) {

    if (error === 'AUTH_REQUIRED') {
        $location.path('/');
    }

});
}]);


app.factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        var ref = new Firebase("https://climateimpact.firebaseio.com");
        return $firebaseAuth(ref);
    }
]);

app.config(["$routeProvider", "$locationProvider",
    function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                controller: 'MainController',
                templateUrl: 'partials/home.html'
            })
            .when('/calculate', {
                controller: 'CalculatorCtrl',
                templateUrl: 'partials/calculate.html',
                resolve: {
                    // controller will not be loaded until $waitForAuth resolves
                    // Auth refers to our $firebaseAuth wrapper in the example above
                    "currentAuth": ["Auth", function(Auth) {
                        // $waitForAuth returns a promise so the resolve waits for it to complete
                        return Auth.$waitForAuth();
                    }]
                }
            })
            // .when('/map', {
            //     controller: 'MapController',
            //     templateUrl: 'partials/map.html',
            //     resolve: {
            //         // controller will not be loaded until $waitForAuth resolves
            //         // Auth refers to our $firebaseAuth wrapper in the example above
            //         "currentAuth": ["Auth", function(Auth) {
            //             // $waitForAuth returns a promise so the resolve waits for it to complete
            //             return Auth.$waitForAuth();
            //         }]
            //     }
            // })
            .otherwise({ redirectTo : '/' });
        $locationProvider.html5Mode(true);
    }
]);


/**
 * ICONS
 */
app.config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
        .iconSet('action', '../styles/images/icons/material-design/action-icons.svg', 24)
        .iconSet('alert', '../styles/images/icons/material-design/alert-icons.svg', 24)
        .iconSet('av', '../styles/images/icons/material-design/av-icons.svg', 24)
        .iconSet('communication', '../styles/images/icons/material-design/communication-icons.svg', 24)
        .iconSet('content', '../styles/images/icons/material-design/content-icons.svg', 24)
        .iconSet('device', '../styles/images/icons/material-design/device-icons.svg', 24)
        .iconSet('editor', '../styles/images/icons/material-design/editor-icons.svg', 24)
        .iconSet('file', '../styles/images/icons/material-design/file-icons.svg', 24)
        .iconSet('hardware', '../styles/images/icons/material-design/hardware-icons.svg', 24)
        .iconSet('icons', '../styles/images/icons/material-design/icons-icons.svg', 24)
        .iconSet('image', '../styles/images/icons/material-design/image-icons.svg', 24)
        .iconSet('maps', '../styles/images/icons/material-design/maps-icons.svg', 24)
        .iconSet('navigation', '../styles/images/icons/material-design/navigation-icons.svg', 24)
        .iconSet('notification', '../styles/images/icons/material-design/notification-icons.svg', 24)
        .iconSet('social', '../styles/images/icons/material-design/social-icons.svg', 24)
        .iconSet('toggle', '../styles/images/icons/material-design/toggle-icons.svg', 24)
}]);


app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default');
});


app.controller('MainController', ["$scope", "$mdSidenav",
    function($scope, $mdSidenav) {

        $scope.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };

        $scope.toggleSide = function() {
            console.log('toggle');
            $mdSidenav('left').toggle();
        };

    }
]);

app.controller('CalculatorCtrl', ["$scope",
    function($scope) {

    }
]);