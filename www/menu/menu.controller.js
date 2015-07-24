angular
		.module('CriticalRoll')
		.controller('MenuController', function ($scope, $state, $cordovaSocialSharing, CardService, PopoverService, $translate, $ionicSideMenuDelegate) {

			$scope.showOption = function (option) {
				var cardDrawn = {};
				cardDrawn.primaryType = option;
				CardService.placeCard(cardDrawn);
				PopoverService.close();
			};

			$scope.share = function () {
				PopoverService.close();
				$cordovaSocialSharing.share(
						$translate.instant('SOCIAL-SHARING-MESSAGE'),
						$translate.instant('SOCIAL-SHARING-SUBJECT'),
						null,
						"https://play.google.com/store/apps/details?id=com.vanillaicecreamstudio.criticalroll"
				);
			};

			$scope.closeMenu = function () {
				$state.go('app.license');
				$ionicSideMenuDelegate.toggleLeft(false);
			};

		});