angular.module('CriticalRoll').controller('MenuController', function ($scope, $cordovaSocialSharing, $translate, $ionicSideMenuDelegate) {

		var linkURLs = {
			"share": "https://play.google.com/store/apps/details?id=com.vanillaicecreamstudio.criticalroll",
			"feedback": "https://gitreports.com/issue/gemorelli/CriticalRoll",
			"pathfinderRPG": "http://paizo.com/pathfinderRPG/"
		};

		$scope.toggleMenu = function () {
			if ($ionicSideMenuDelegate.isOpenLeft()) {
				$ionicSideMenuDelegate.toggleLeft(false);
			} else {
				$ionicSideMenuDelegate.toggleLeft(true);
			}
		}

		$scope.share = function () {
			//if (ionic.Platform.isWindowsPhone()) {
			// linkURL = "WP URL";
			//} else if (ionic.Platform.isIOS()) {
			// var url = "IOS URL";
			//}

			$cordovaSocialSharing.share(
				$translate.instant('SHARE-MESSAGE'),
				$translate.instant('SHARE-SUBJECT'),
				null,
				linkURLs.share
			);
		};

		$scope.openLink = function (linkName) {
			window.open(linkURLs[linkName], '_system');
			return false;
		};

		$scope.isMobile = function () {
			return ionic.Platform.isAndroid() || ionic.Platform.isIOS() || ionic.Platform.isWindowsPhone();
		};
	}
);