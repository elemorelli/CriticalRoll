angular
		.module('CriticalRoll')
		.controller('FooterController', function ($scope, CardService) {

			$scope.drawCard = CardService.drawCard;

		});
