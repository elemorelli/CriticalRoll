angular
		.module('CriticalRoll')
		.controller('CardsController', function ($scope, CardService, PopoverService) {

			$scope.drawnCards = CardService.drawnCards;

			$scope.drawCard = CardService.drawCard;

			$scope.openPopover = function ($event, templateName, text) {
				PopoverService.openPopover($event, templateName, text, $scope);
			};
		});
