CriticalRoll.controller('CardsController', function ($rootScope, $scope, $http, $ionicScrollDelegate) {

	$scope.drawCard = function (primaryType, secondaryType) {
		var cardQuantity = 52;
		var randomIndex = Math.floor(Math.random() * cardQuantity) + 1;
		var cardNameTemplate = 'CARD-' + primaryType.toUpperCase() + '-' + secondaryType.toUpperCase() + '-' + randomIndex;

		var cardDrawn = {
			primaryType: primaryType,
			secondaryType: secondaryType,
			title: cardNameTemplate + '-TITLE',
			text: cardNameTemplate + '-TEXT'
		};
		$scope.placeCard(cardDrawn);
	};

	$scope.placeCard = function (cardDrawn) {
		$scope.drawnCards.push(cardDrawn);
		$ionicScrollDelegate.scrollBottom(true);
	};

	$scope.emitPopover = function ($event, template) {
		$rootScope.$emit('openPopover', template);
	};

	$rootScope.$on('showOption', function (event, option) {
		var cardDrawn = {};
		cardDrawn.primaryType = option;
		$scope.placeCard(cardDrawn);
	});

	$rootScope.$on('drawCard', function (event, primaryType, secondaryType) {
		$scope.drawCard(primaryType, secondaryType);
	});

	$rootScope.$on('removeAll', function (event) {
		$scope.drawnCards = [];
		$ionicScrollDelegate.scrollTop(true);
	});

	$scope.drawnCards = [];

});
