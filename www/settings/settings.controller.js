angular.module('CriticalRoll').controller('SettingsController', function ($scope, SettingsService, emailService) {

        $scope.settings = SettingsService.settings;

        $scope.settingsChanged = SettingsService.settingsChanged;

        $scope.helpWithPortuguese = function () {
            emailService.compose("PORTUGUESE");
        };
    }
);