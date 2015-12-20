angular.module('CriticalRoll').controller('RuletipsController', function ($scope, $translate, RuletipsService) {

		$scope.ruletips = RuletipsService.ruletips;

		$scope.openRuletip = RuletipsService.openRuletip;

	}
);