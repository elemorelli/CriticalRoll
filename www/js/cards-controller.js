criticalRoller.controller('CardsController', function($scope, $http) {

  $scope.currentCard = {};

  $scope.drawnCards = [];

  $http.get("data/critical-slashing.json").success(function(data) {
    $scope.criticalSlashing = data;
  });

  $http.get("data/critical-piercing.json").success(function(data) {
    $scope.criticalPiercing = data;
  });

  $http.get("data/critical-bludgeoning.json").success(function(data) {
    $scope.criticalBludgeoning = data;
  });

  $http.get("data/critical-magic.json").success(function(data) {
    $scope.criticalMagic = data;
  });

  $http.get("data/fumble-melee.json").success(function(data) {
    $scope.fumbleMelee = data;
  });

  $http.get("data/fumble-ranged.json").success(function(data) {
    $scope.fumbleRanged = data;
  });

  $http.get("data/fumble-Natural.json").success(function(data) {
    $scope.fumbleNatural = data;
  });

  $http.get("data/fumble-magic.json").success(function(data) {
    $scope.fumbleMagic = data;
  });
});