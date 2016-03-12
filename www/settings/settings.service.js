(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .service('SettingsService', SettingsService);

    function SettingsService(LanguageService) {

        this.settings = {
            system: 'pfrpg',
            language: 'en'
        };

        this.settingsChanged = function () {
            window.localStorage.settings = JSON.stringify(this.settings);
            LanguageService.loadLanguage(this.settings.system, this.settings.language);
        };

        this.init = function () {
            if (window.localStorage.settings)
                this.settings = JSON.parse(window.localStorage.settings);
        };

        this.init();

    }

})();