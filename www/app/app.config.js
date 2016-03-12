(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .config(config);

    function config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.scrolling.jsScrolling(true);

        $stateProvider.state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'menu/menu.template.html',
            controller: 'MenuController',
            controllerAs: 'menu'
        }).state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'app/main.template.html',
                    controller: 'CardsController',
                    controllerAs: 'cards'
                }
            }
        }).state('app.license', {
            url: '/license',
            views: {
                'menuContent': {
                    templateUrl: 'menu/license.template.html'
                }
            }
        }).state('app.help', {
            url: '/help',
            views: {
                'menuContent': {
                    templateUrl: 'menu/help.template.html',
                    controller: 'MenuController',
                    controllerAs: 'menu'
                }
            }
        }).state('app.ruletips', {
            url: '/ruletips',
            views: {
                'menuContent': {
                    templateUrl: 'ruletips/ruletips.template.html',
                    controller: 'RuletipsController',
                    controllerAs: 'ruletips'
                }
            }
        }).state('app.settings', {
            url: '/settings',
            views: {
                'menuContent': {
                    templateUrl: 'settings/settings.template.html',
                    controller: 'SettingsController',
                    controllerAs: 'settings'
                }
            }
        });

        $urlRouterProvider.otherwise('/app/home');
    }

    // Horrible hack for WindowsPhone: https://github.com/driftyco/ionic/issues/2150
    if (ionic.Platform.isWindowsPhone()) {
        $document.find('button').attr('data-tap-disabled', true);
    }

})();