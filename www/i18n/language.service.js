(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .service('LanguageService', LanguageService);

    function LanguageService($translate) {

        this.loadLanguage = loadLanguage;

        function loadLanguage(system, language) {
            $translate.use(system + '-' + language);
        }
    }

})();