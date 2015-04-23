var CriticalRoll = angular.module('CriticalRoll', ['ionic', 'pascalprecht.translate']);

CriticalRoll.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    };

    if (window.StatusBar) {
      StatusBar.styleDefault();
    };
  });
});

var openLink = function(href) {
  window.open(href, '_system');
  return false;
};