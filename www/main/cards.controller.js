angular.module('CriticalRoll').controller('CardsController', function ($scope, CardService, RuletipsService, ionicMaterialInk) {

	$scope.drawnCards = CardService.drawnCards;

	$scope.drawCard = function (primaryType, secondaryType) {
		ionicMaterialInk.displayEffect();
		CardService.drawCard(primaryType, secondaryType);
	};

	$scope.removeAll = function() {
		ionicMaterialInk.displayEffect();
		CardService.removeAll();
	};

	$scope.openRuletip = function ($event, text) {
		RuletipsService.openRuletip($event, text, $scope);
	};
});
