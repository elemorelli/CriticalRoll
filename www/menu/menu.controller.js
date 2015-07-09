angular
		.module('CriticalRoll')
		.controller('MenuController', function ($scope, CardService, PopoverService) {

			$scope.openPopover = function ($event, templateName, text) {
				PopoverService.openPopover($event, templateName, text, $scope);
			};

			$scope.showOption = function (option) {
				var cardDrawn = {};
				cardDrawn.primaryType = option;
				CardService.placeCard(cardDrawn);
				PopoverService.close();
			};

			$scope.removeAll = CardService.removeAll;

		});