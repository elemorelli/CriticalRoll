(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .directive('crIcon', crIcon);

    function crIcon() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                type: "@type"
            },
            templateUrl: 'icon/icon.template.html'
        };
    }

})();