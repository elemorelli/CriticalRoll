angular
		.module('CriticalRoll')
		.controller('MenuController', function ($scope, $state, $cordovaSocialSharing, CardService, PopoverService, $translate, $ionicSideMenuDelegate) {

			$scope.shareAndroid = function () {
				$cordovaSocialSharing.share(
						$translate.instant('SHARE-MESSAGE'),
						$translate.instant('SHARE-SUBJECT'),
						null,
						"https://play.google.com/store/apps/details?id=com.vanillaicecreamstudio.criticalroll"
				);
			};

			$scope.shareWindowsPhone = function () {
				$cordovaSocialSharing.share(
						$translate.instant('SHARE-MESSAGE'),
						$translate.instant('SHARE-SUBJECT'),
						null,
						"https://play.google.com/store/apps/details?id=com.vanillaicecreamstudio.criticalroll"
				);
			};

			$scope.showTutorial = function () {
				console.log("ShowTutorial");
			};

		});