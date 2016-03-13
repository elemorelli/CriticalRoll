(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .service('SettingsService', SettingsService);

    function SettingsService(LanguageService) {

        var self = this;

        this.values = {
            system: 'pfrpg',
            language: 'en'
        };

        this.refreshSettings = refreshSettings;

        function init() {
            if (window.localStorage.settings)
                self.values = JSON.parse(window.localStorage.settings);
        }

        init();

        function refreshSettings() {
            window.localStorage.settings = JSON.stringify(self.values);
            LanguageService.loadLanguage(self.values.system, self.values.language);
        }
    }

})();