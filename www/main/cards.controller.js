angular.module('CriticalRoll').controller('CardsController', function ($scope, CardService, PopoverService, ionicMaterialInk) {

	$scope.drawnCards = CardService.drawnCards;

	$scope.drawCard = function (primaryType, secondaryType) {
		ionicMaterialInk.displayEffect();
		CardService.drawCard(primaryType, secondaryType);
	};

	$scope.removeAll = function() {
		ionicMaterialInk.displayEffect();
		CardService.removeAll();
	}

	$scope.openPopover = function ($event, text) {
		PopoverService.openPopover($event, text, $scope);
	};
});
