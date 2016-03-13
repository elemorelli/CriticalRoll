(function () {
  'use strict';

  angular.module('CriticalRoll', [
    'ionic',
    'ngCordova',
    'ionic-material',
    'pascalprecht.translate'
  ]).run(run);

  function run($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }
})();
