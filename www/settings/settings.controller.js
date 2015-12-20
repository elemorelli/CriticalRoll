angular.module('CriticalRoll').controller('SettingsController', function ($scope, $translate, RuletipsService) {

		$scope.ruletips = RuletipsService.ruletips;

		$scope.openRuletip = RuletipsService.openRuletip;

	}
);