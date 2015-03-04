criticalRoller.controller('ButtonsController', function($scope, $http) {
  $scope.draw = function(rollType, attackType) {
    $scope.drawnCards.push($scope.criticalSlashing[1]);
  };

});