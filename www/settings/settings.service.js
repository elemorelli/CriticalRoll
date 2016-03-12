(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .service('SettingsService', SettingsService);

    function SettingsService(LanguageService) {

        this.values = {
            system: 'pfrpg',
            language: 'en'
        };

        this.refreshSettings = function () {
            window.localStorage.settings = JSON.stringify(this.values);
            LanguageService.loadLanguage(this.values.system, this.values.language);
        };

        this.init = function () {
            if (window.localStorage.settings)
                this.values = JSON.parse(window.localStorage.settings);
        };

        this.init();

    }

})();