(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .controller('SettingsController', SettingsController);

    function SettingsController(SettingsService, emailService) {

        var vm = this;

        vm.values = SettingsService.values;

        vm.refreshSettings = SettingsService.refreshSettings;

        vm.helpWithPortuguese = function () {
            emailService.compose("PORTUGUESE");
        };
    }
})();