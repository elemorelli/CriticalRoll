CriticalRoll.controller('ShareController', function ($scope, $cordovaSocialSharing, $translate, PopoverService) {

	$scope.share = function () {
		PopoverService.close();
		$cordovaSocialSharing.share(
				$translate.instant('SOCIAL-SHARING-MESSAGE'),
				$translate.instant('SOCIAL-SHARING-SUBJECT'),
				null,
				"https://play.google.com/store/apps/details?id=com.vanillaicecreamstudio.criticalroll"
		);
	}
});