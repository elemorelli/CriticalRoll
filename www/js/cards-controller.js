CriticalRoll.controller('CardsController', function ($rootScope, $scope, $http, CardService) {

	$scope.drawnCards = CardService.drawnCards;

	$scope.drawCard = CardService.drawCard;

	$scope.emitPopover = function ($event, template) {
		$rootScope.$emit('openPopover', template);
	};



});
