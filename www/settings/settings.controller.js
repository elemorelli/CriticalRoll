angular.module('CriticalRoll').controller('SettingsController', function ($scope, SettingsService) {

		$scope.settings = SettingsService.settings;

		$scope.settingsChanged = SettingsService.settingsChanged;
	}
);