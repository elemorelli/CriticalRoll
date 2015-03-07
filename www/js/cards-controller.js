criticalRoller.controller('CardsController', function($scope, $http, $ionicScrollDelegate) {

  $scope.fillCardData = function(primaryType, secondaryType) {
    var url = "data/" + primaryType + "-" + secondaryType + ".json";
    $scope.cardsData[primaryType] = {};
    $http.get(url).success(function(data) {
      $scope.cardsData[primaryType][secondaryType] = data;
    });
  };

  $scope.cardsData = {};
  $scope.fillCardData("about", "CriticalRoll");
  $scope.fillCardData("about", "opensource");
  $scope.fillCardData("about", "license");
  $scope.fillCardData("critical", "slashing");
  $scope.fillCardData("critical", "piercing");
  $scope.fillCardData("critical", "bludgeoning");
  $scope.fillCardData("critical", "magic");
  $scope.fillCardData("fumble", "melee");
  $scope.fillCardData("fumble", "ranged");
  $scope.fillCardData("fumble", "natural");
  $scope.fillCardData("fumble", "magic");

  $scope.drawnCards = [];

  $scope.removeAll = function() {
    $scope.drawnCards = [];
    $ionicScrollDelegate.scrollTop(true);
  };

  $scope.drawCard = function(primaryType, secondaryType) {
    var cardQuantity = $scope.cardsData[primaryType][secondaryType].length;
    var randomIndex = Math.floor(Math.random() * cardQuantity);
    $scope.placeCard(primaryType, secondaryType, randomIndex);
  };

  $scope.placeCard = function(primaryType, secondaryType, index) {
    index = index || 0;
    var cardDrawn = $scope.cardsData[primaryType][secondaryType][index];

    cardDrawn["primaryType"] = primaryType;
    cardDrawn["secondaryType"] = secondaryType;

    $scope.drawnCards.push(cardDrawn);
    $ionicScrollDelegate.scrollBottom(true);
  };

});