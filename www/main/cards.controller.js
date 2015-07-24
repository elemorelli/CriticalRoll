angular.module('CriticalRoll').controller('CardsController', function ($scope, CardService, PopoverService) {

	$scope.drawnCards = CardService.drawnCards;

	$scope.openPopover = function ($event, text) {
		PopoverService.openPopover($event, text, $scope);
	};

	$scope.removeAll = CardService.removeAll;
});
