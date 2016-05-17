"use strict";

var app = angular.module("ClimateApp", ["firebase"]);

app.controller("userController", ["$scope", "$firebaseAuth",
    function ($scope, $firebaseAuth) {
        var ref = new Firebase("https://climateimpact.firebaseio.com");
        var auth = $firebaseAuth(ref);

        $scope.login = function() {
            $scope.authData = null;
            $scope.error = null;
        }

        console.log('User Controller');


    }
]);