criticalRoller.controller('CardsController', function($rootScope, $scope, $http, $ionicScrollDelegate) {

  $scope.fillCardData = function(primaryType, secondaryType) {
    var url = "data/" + primaryType + "-" + secondaryType + ".json";
    $scope.cardsData[primaryType] = {};
    $http.get(url).success(function(data) {
      $scope.cardsData[primaryType][secondaryType] = data;
    });
  };

  $scope.cardsData = {};
  $scope.fillCardData("critical", "slashing");
  $scope.fillCardData("critical", "piercing");
  $scope.fillCardData("critical", "bludgeoning");
  $scope.fillCardData("critical", "magic");
  $scope.fillCardData("fumble", "melee");
  $scope.fillCardData("fumble", "ranged");
  $scope.fillCardData("fumble", "natural");
  $scope.fillCardData("fumble", "magic");

  $scope.drawnCards = [];

  $scope.drawCard = function(primaryType, secondaryType) {
    var cardQuantity = $scope.cardsData[primaryType][secondaryType].length;
    var randomIndex = Math.floor(Math.random() * cardQuantity);

    var cardDrawn = $scope.cardsData[primaryType][secondaryType][randomIndex];
    cardDrawn["primaryType"] = primaryType;
    cardDrawn["secondaryType"] = secondaryType;

    $scope.placeCard(cardDrawn);
  };

  $scope.placeCard = function(cardDrawn) {
    $scope.drawnCards.push(cardDrawn);
    $ionicScrollDelegate.scrollBottom(true);
  };

  $rootScope.$on("showOption", function(event, option) {
    var cardDrawn = {
      "primaryType": option
    };
    $scope.placeCard(cardDrawn);
  });

  $rootScope.$on("drawCard", function(event, primaryType, secondaryType) {
    $scope.drawCard(primaryType, secondaryType);
  });

  $rootScope.$on("removeAll", function(event) {
    $scope.drawnCards = [];
    $ionicScrollDelegate.scrollTop(true);
  });

});