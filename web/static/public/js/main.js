"use strict";

var app = angular.module('ClimateApp', ['ngRoute', 'ngMaterial', 'ngMdIcons', 'gservice', 'firebase']);

app.run(["$rootScope", "$location", function($rootScope, $location) {

$rootScope.$on("$routeChangeError", function(event, next, previous, error) {

    if (error === "AUTH_REQUIRED") {
        $location.path('/');
    }
});
}]);

/**
 * ThEME
 */
app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('main')
        .primaryPalette('grey', {
            'default': '800',
            'hue-2': '700',
            'hue-3': '50'
        })
        .accentPalette('grey', {
            'default': '50',
            'hue-2': '50'
        })
        .backgroundPalette('green', {
            'default': '600'
        });

    $mdThemingProvider.theme('home')
        .primaryPalette('grey', {
            'default': '700'
        })
        .accentPalette('green', {
            'default': '600'
        })
        .backgroundPalette('grey', {
            'default': '50'
        });
});


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


/**
 * Auth Factory
 * **/
app.factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        var ref = new Firebase("https://climateimpact.firebaseio.com");
        return $firebaseAuth(ref);
    }
]);


/**
 * ROUTES
 * **/
app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'partials/home.html',
        resolve: {
            // controller will not be loaded until $waitForAuth resolves
            // Auth refers to our $firebaseAuth wrapper in the example above
            "currentAuth": ["Auth", function(Auth) {
                // $waitForAuth returns a promise so the resolve waits for it to complete
                return Auth.$waitForAuth();
            }]
        }
    })
    .when('/app/account', {
        controller: 'AccountCtrl',
        templateUrl: 'partials/account.html',
        resolve: {
            // controller will not be loaded until $requireAuth resolves
            // Auth refers to our $firebaseAuth wrapper in the example above
            "currentAuth": ["Auth", function(Auth) {
                // $requireAuth returns a promise so the resolve waits for it to complete
                // If the promise is rejected, it will throw a $stateChangeError
                return Auth.$requireAuth();
            }]
        }
    })
    .when('/app/calculate', {
        controller: 'calculatorCtrl',
        templateUrl: 'partials/calc.html',
        resolve: {
            "currentAuth": ["Auth", function(Auth) {
                return Auth.$requireAuth();
            }]
        }
    })
    .when('/app/map', {
        controller: 'MapController',
        templateUrl: 'partials/map.html',
        resolve: {
            // controller will not be loaded until $requireAuth resolves
            // Auth refers to our $firebaseAuth wrapper in the example above
            "currentAuth": ["Auth", function(Auth) {
                // $requireAuth returns a promise so the resolve waits for it to complete
                // If the promise is rejected, it will throw a $stateChangeError
                return Auth.$requireAuth();
            }]
        }
    });
}]);

/**
 * Controllers
 */
app.controller("userCtrl", ["$scope", "currentAuth",
    function($scope, Auth) {
        $scope.createUser = function() {
            $scope.message = null;
            $scope.error = null;

            Auth.$createUser({
                email: $scope.email,
                password: $scope.password
            }).then(function(userData) {
                $scope.message = "User created with uid: " + userData.uid;
            }).catch(function(error) {
                $scope.error = error;
            });
        };

        $scope.removeUser = function() {
            $scope.message = null;
            $scope.error = null;

            Auth.$removeUser({
                email: $scope.email,
                password: $scope.password
            }).then(function() {
                $scope.message = "User removed";
            }).catch(function(error) {
                $scope.error = error;
            });
        };

    }
]);

app.controller("HomeCtrl", ["$scope", "currentAuth", "$mdSidenav",
    function($scope, Auth, $mdSidenav) {

        $scope.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };

        $scope.announceClick = function(index) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('You clicked!')
                    .textContent('You clicked the menu item at index ' + index)
                    .ok('Nice')
                    .targetEvent(originatorEv)
            );
            originatorEv = null;
        };

        $scope.toggleSide = function() {
            console.log('toggle');
            $mdSidenav('left').toggle();
        };

    }
]);

app.controller("calculatorCtrl", ["$scope", "currentAuth",
    function($scope, Auth) {
        console.log('calculate');
    }
]);

