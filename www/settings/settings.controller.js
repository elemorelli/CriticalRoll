(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .controller('SettingsController', SettingsController);

    function SettingsController($scope, SettingsService, emailService) {

        $scope.settings = SettingsService.settings;

        $scope.settingsChanged = SettingsService.settingsChanged;

        $scope.helpWithPortuguese = function () {
            emailService.compose("PORTUGUESE");
        };
    }
})();