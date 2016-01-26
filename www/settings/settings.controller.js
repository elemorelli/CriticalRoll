angular.module('CriticalRoll').controller('SettingsController', function ($scope, SettingsService) {

		$scope.settings = SettingsService.settings;

		$scope.get = SettingsService.get;

		$scope.set = SettingsService.set;

		$scope.settingsChanged = SettingsService.settingsChanged;
	}
);