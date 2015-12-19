angular.module('CriticalRoll', ['ionic', 'ngCordova', 'ionic-material', 'pascalprecht.translate']).run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});