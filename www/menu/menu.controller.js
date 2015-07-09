angular
		.module('CriticalRoll')
		.controller('MenuController', function ($scope, CardService, PopoverService) {

			$scope.showOption = function (option) {
				var cardDrawn = {};
				cardDrawn.primaryType = option;
				CardService.placeCard(cardDrawn);
				PopoverService.close();
			};

		});