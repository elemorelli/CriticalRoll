criticalRoller.controller('CardsController', function($scope, $http, $ionicScrollDelegate) {

  $scope.getData = function(rollType, attackType) {
    var url = "data/" + rollType + "-" + attackType + ".json";
    $http.get(url).success(function(data) {
      $scope.cardsData[rollType][attackType] = data;
    });
  };

  $scope.transformClass = function(classToTransform) {
    switch (classToTransform) {
      case "critical":
        return "balanced";
      case "fumble":
        return "assertive";
    }
  };

  $scope.cardsData = {
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

  $scope.drawnCards = [];

  $scope.draw = function(rollType, attackType) {

    var cardArray = $scope.cardsData[rollType][attackType];

    var randomIndex = Math.floor(Math.random() * cardArray.length);

    cardDrawn = cardArray[randomIndex];
    cardDrawn["rollType"] = $scope.transformClass(rollType);
    cardDrawn["attackType"] = attackType;

    $scope.drawnCards.push(cardDrawn);

    $ionicScrollDelegate.scrollBottom(true);
  };

  $scope.remove = function(index) {
    $scope.drawnCards.splice(index, 1);
  }



});
