CriticalRoll.directive('header', function() {
  return {
    restrict: 'E',
    templateUrl: 'header.html'
  }
});

CriticalRoll.directive('content', function() {
  return {
    restrict: 'E',
    templateUrl: 'content.html'
  }
});

CriticalRoll.directive('footer', function() {
  return {
    restrict: 'E',
    templateUrl: 'footer.html'
  }
});

CriticalRoll.directive('critical', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/critical.html'
  }
});

CriticalRoll.directive('fumble', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/fumble.html'
  }
});

CriticalRoll.directive('help', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/help.html'
  }
});

CriticalRoll.directive('about', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/about.html'
  }
});

CriticalRoll.directive('license', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/license.html'
  }
});

CriticalRoll.directive('opensource', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/opensource.html'
  }
});

CriticalRoll.directive('cardText', function($compile, $parse) {
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
