CriticalRoll.controller('MenuController', function ($rootScope, $scope, $ionicPopover, CardService) {

	$rootScope.openPopover = function ($event, templateName, text) {

		$scope.popoverText = text;
		$ionicPopover.fromTemplateUrl('templates/popover-' + templateName + '.html', {
			scope: $scope
		}).then(function (popover) {
			$scope.popover = popover;
			$scope.popover.show($event);
		});
	};

	$scope.closePopover = function () {
		$scope.popover.hide();
	};

	$scope.showOption = function (option) {
		var cardDrawn = {};
		cardDrawn.primaryType = option;
		CardService.placeCard(cardDrawn);
		$scope.closePopover();
	};

	$scope.removeAll = CardService.removeAll;
});