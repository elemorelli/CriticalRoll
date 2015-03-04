criticalRoller.controller('CardsController', function($scope, $http) {

  $scope.getData = function(rollType, attackType) {
    var url = "data/" + rollType + "-" + attackType + ".json";
    $http.get(url).success(function(data) {
      $scope.cards[rollType][attackType] = data;
    });
  }

  $scope.drawnCards = [];

  $scope.cards = {
    "critical": {
      "slashing": [],
      "piercing": [],
      "bludgeoning": [],
      "magic": []
    },
    "fumble": {
      "melee": [],
      "ranged": [],
      "natural": [],
      "magic": [],
    }
  };

  $scope.getData("critical", "slashing");
  $scope.getData("critical", "piercing");
  $scope.getData("critical", "bludgeoning");
  $scope.getData("critical", "magic");
  $scope.getData("fumble", "melee");
  $scope.getData("fumble", "ranged");
  $scope.getData("fumble", "natural");
  $scope.getData("fumble", "magic");

});