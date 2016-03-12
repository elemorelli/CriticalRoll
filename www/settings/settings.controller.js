(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .controller('SettingsController', SettingsController);

    function SettingsController(SettingsService, emailService) {

        var vm = this;

        vm.settings = SettingsService.settings;

        vm.settingsChanged = SettingsService.settingsChanged;

        vm.helpWithPortuguese = function () {
            emailService.compose("PORTUGUESE");
        };
    }
})();