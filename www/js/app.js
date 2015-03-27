// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var criticalRoller = angular.module('criticalRoller', ['ionic']);

criticalRoller.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

criticalRoller.directive('header', function() {
  return {
    restrict: 'E',
    templateUrl: 'header.html'
  }
});

criticalRoller.directive('content', function() {
  return {
    restrict: 'E',
    templateUrl: 'content.html'
  }
});

criticalRoller.directive('footer', function() {
  return {
    restrict: 'E',
    templateUrl: 'footer.html'
  }
});

criticalRoller.directive('critical', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/critical.html'
  }
});

criticalRoller.directive('fumble', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/fumble.html'
  }
});

criticalRoller.directive('help', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/help.html'
  }
});

criticalRoller.directive('about', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/about.html'
  }
});

criticalRoller.directive('license', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/license.html'
  }
});

criticalRoller.directive('opensource', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/opensource.html'
  }
});

criticalRoller.directive('cardText', function($compile, $parse) {
  return {
    restrict: 'E',
    link: function(scope, element, attr) {
      scope.$watch(attr.content, function() {
        element.html($parse(attr.content)(scope));
        $compile(element.contents())(scope);
      }, true);
    }
  }
});
