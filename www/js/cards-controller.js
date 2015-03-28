CriticalRoll.controller('CardsController', function($rootScope, $scope, $http, $ionicScrollDelegate) {

  $scope.fillCardData = function(primaryType, secondaryType) {
    var url = 'data/' + primaryType + '-' + secondaryType + '.json';
    $scope.cardsData[primaryType] = {};
    $http.get(url)
      .success(function(data) {
        $scope.cardsData[primaryType][secondaryType] = data;
      });
  };

  $scope.cardsData = {};
  $scope.fillCardData('critical', 'slashing');
  $scope.fillCardData('critical', 'piercing');
  $scope.fillCardData('critical', 'bludgeoning');
  $scope.fillCardData('critical', 'magic');
  $scope.fillCardData('fumble', 'melee');
  $scope.fillCardData('fumble', 'ranged');
  $scope.fillCardData('fumble', 'natural');
  $scope.fillCardData('fumble', 'magic');

  $scope.drawnCards = [];

  $scope.drawCard = function(primaryType, secondaryType) {
    var cardQuantity = $scope.cardsData[primaryType][secondaryType].length;
    var randomIndex = Math.floor(Math.random() * cardQuantity);

    var cardDrawn = $scope.cardsData[primaryType][secondaryType][randomIndex];

    if (!cardDrawn.primaryType) {
      cardDrawn.primaryType = primaryType;
      cardDrawn.secondaryType = secondaryType;
      cardDrawn.text = cardDrawn.text.replace(/%([\w\s-]+)=([\w\s-]+)%/gi,
        '<a class="popover-link" ng-click="openPopover($event, &apos;card-help&apos;, &apos;$1&apos;)">$2</a>');
    }

    $scope.placeCard(cardDrawn);
  };

  $scope.renderHtml = function(htmlCode) {
    return $sce.trustAsHtml(htmlCode);
  };

  $scope.placeCard = function(cardDrawn) {
    $scope.drawnCards.push(cardDrawn);
    $ionicScrollDelegate.scrollBottom(true);
  };

  $scope.emitPopover = function($event, template) {
    $rootScope.$emit('openPopover', template);
  };

  $rootScope.$on('showOption', function(event, option) {
    var cardDrawn = {};
    cardDrawn.primaryType = option;
    $scope.placeCard(cardDrawn);
  });

  $rootScope.$on('drawCard', function(event, primaryType, secondaryType) {
    $scope.drawCard(primaryType, secondaryType);
  });

  $rootScope.$on('removeAll', function(event) {
    $scope.drawnCards = [];
    $ionicScrollDelegate.scrollTop(true);
  });

});
