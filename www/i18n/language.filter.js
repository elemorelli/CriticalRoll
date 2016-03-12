(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .filter('parseHTML', parseHTML);

    function parseHTML($sce) {

        return function (input) {
            var replacedText = input.replace(/%([\w\s-]+)=([\w\sñáéíóú-]+)%/gi,
                '<a class="ruletip-link" ng-click="openRuletip(&apos;$1&apos;)">$2</a>');
            return $sce.trustAsHtml(replacedText);
        };
    }

})();