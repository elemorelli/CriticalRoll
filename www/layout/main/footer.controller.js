angular
		.module('CriticalRoll')
		.controller('ButtonsController', function ($scope, CardService) {

			$scope.drawCard = CardService.drawCard;

		});
