'use strict';

var ClimateApp = angular.module('ClimateApp',
    [
        'addCtrl',
        'ngRoute',
        'ngMaterial',
        'ngMdIcons',
        'gservice',
        'firebase'
    ])
    .config(function($mdThemingProvider) {
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

    })
    .config(['$mdIconProvider', function($mdIconProvider) {
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
    }])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                controller: 'MainController',
                templateUrl: 'partials/home.html'
            })
            .when('/signup', {
                controller: 'UserController',
                templateUrl: 'partials/signup.html'
            })
            .when('/app/home', {
                controller: 'MainController',
                templateUrl: 'partials/main.html'
            })
            .when('/app/map', {
                controller: 'MapController',
                templateUrl: 'partials/map.html'
            })
            .otherwise({redirectTo: '/home'});
    })
    // .config(function($mdThemingProvider) {
    //     var customPrimary = {
    //         '50': '#83ebcb',
    //         '100': '#6de8c2',
    //         '200': '#57e4b9',
    //         '300': '#41e1b0',
    //         '400': '#2bdda7',
    //         '500': '21CE99',
    //         '600': '#1db889',
    //         '700': '#1aa278',
    //         '800': '#168c68',
    //         '900': '#137658',
    //         'A100': '#99efd5',
    //         'A200': '#aff2de',
    //         'A400': '#c5f6e7',
    //         'A700': '#0f6047',
    //         'contrastDefaultColor': 'light'
    //     };
    //
    //     // var customPrimary = {
    //     //     '50': '#616161',
    //     //     '100': '#545454',
    //     //     '200': '#474747',
    //     //     '300': '#3a3a3a',
    //     //     '400': '#2e2e2e',
    //     //     '500': '#212121',
    //     //     '600': '#141414',
    //     //     '700': '#070707',
    //     //     '800': '#000000',
    //     //     '900': '#000000',
    //     //     'A100': '#6d6d6d',
    //     //     'A200': '#7a7a7a',
    //     //     'A400': '#878787',
    //     //     'A700': '#000000'
    //     // };
    //
    //     $mdThemingProvider
    //         .definePalette('customPrimary',
    //                         customPrimary);
    //     var customAccent = {
    //         '50': '#a68300',
    //         '100': '#bf9700',
    //         '200': '#d9ac00',
    //         '300': '#f2c000',
    //         '400': '#ffcc0d',
    //         '500': '#ffd226',
    //         '600': '#ffdc59',
    //         '700': '#ffe273',
    //         '800': '#ffe78c',
    //         '900': '#ffeca6',
    //         'A100': '#ffdc59',
    //         'A200': 'FFD740',
    //         'A400': '#ffd226',
    //         'A700': '#fff2bf',
    //         'contrastDefaultColor': 'light'
    //     };
    //
    //     $mdThemingProvider
    //         .definePalette('customAccent',
    //                         customAccent);
    //
    //     var customWarn = {
    //         '50': '#ffffff',
    //         '100': '#feeff0',
    //         '200': '#fcd7db',
    //         '300': '#fac0c5',
    //         '400': '#f9a8af',
    //         '500': '#f79099',
    //         '600': '#f57883',
    //         '700': '#f4606d',
    //         '800': '#f24957',
    //         '900': '#f03142',
    //         'A100': '#ffffff',
    //         'A200': '#ffffff',
    //         'A400': '#ffffff',
    //         'A700': '#ee192c'
    //     };
    //     $mdThemingProvider
    //         .definePalette('customWarn',
    //                         customWarn);
    //
    //     var customBackground = {
    //         '50': '#828282',
    //         '100': '#757575',
    //         '200': '#686868',
    //         '300': '#5b5b5b',
    //         '400': '#4f4f4f',
    //         '500': '#424242',
    //         '600': '#353535',
    //         '700': '#282828',
    //         '800': '#1c1c1c',
    //         '900': '#0f0f0f',
    //         'A100': '#8e8e8e',
    //         'A200': '#9b9b9b',
    //         'A400': '#a8a8a8',
    //         'A700': '#020202'
    //     };
    //     $mdThemingProvider
    //         .definePalette('customBackground',
    //             customBackground);
    //
    //     // var customBackground = {
    //     //     '50': '#19527e',
    //     //     '100': '#154469',
    //     //     '200': '#113654',
    //     //     '300': '#0c293e',
    //     //     '400': '#081b29',
    //     //     '500': '#040d14',
    //     //     '600': '#000000',
    //     //     '700': '#000000',
    //     //     '800': '#000000',
    //     //     '900': '#000000',
    //     //     'A100': '#1e6093',
    //     //     'A200': '#226ea9',
    //     //     'A400': '#267bbe',
    //     //     'A700': '#000000',
    //     //     'contrastDefaultColor': 'light'
    //     // };
    //     // $mdThemingProvider
    //     //     .definePalette('customBackground',
    //     //                     customBackground);
    //
    //    $mdThemingProvider.theme('default')
    //        .primaryPalette('customPrimary')
    //        .accentPalette('customAccent')
    //        .warnPalette('customWarn')
    //        .backgroundPalette('customBackground').dark();
    // })
    .controller('MainController', function($scope, $mdSidenav, $mdDialog) {
        console.log('Welcome!');

        var originatorEv;

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
    })
    .controller('MapController', function($scope, $http, gservice) {

        $scope.stuff = [];

    });

