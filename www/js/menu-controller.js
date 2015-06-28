CriticalRoll.controller('MenuController', function ($scope, CardService, PopoverService, $cordovaSocialSharing, $translate) {

	$scope.openPopover = function ($event, templateName, text) {
		PopoverService.openPopover($event, templateName, text, $scope);
	};

	$scope.showOption = function (option) {
		var cardDrawn = {};
		cardDrawn.primaryType = option;
		CardService.placeCard(cardDrawn);
		PopoverService.closePopover();
	};

	$scope.removeAll = CardService.removeAll;

	$scope.socialSharing = function () {

		PopoverService.closePopover();
		$cordovaSocialSharing.share(
				$translate.instant('SOCIAL-SHARING-MESSAGE'),
				$translate.instant('SOCIAL-SHARING-SUBJECT'),
				null,
				"https://play.google.com/store/apps/details?id=com.vanillaicecreamstudio.criticalroll");
	}

});