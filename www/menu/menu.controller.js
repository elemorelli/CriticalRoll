angular.module('CriticalRoll').controller('MenuController', function ($scope, $cordovaSocialSharing, $translate) {

			$scope.share = function () {
				var linkURL = "https://play.google.com/store/apps/details?id=com.vanillaicecreamstudio.criticalroll";
				if (ionic.Platform.isWindowsPhone()) {
					linkURL = "WP URL";
				} //else if (ionic.Platform.isIOS()) {
				// var url = "IOS URL";
				//}

				$cordovaSocialSharing.share(
						$translate.instant('SHARE-MESSAGE'),
						$translate.instant('SHARE-SUBJECT'),
						null,
						linkURL
				);
			};

			$scope.isMobile = function () {
				return ionic.Platform.isAndroid() || ionic.Platform.isIOS() || ionic.Platform.isWindowsPhone();
			};

		}
)
;