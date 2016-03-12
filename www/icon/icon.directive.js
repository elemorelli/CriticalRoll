(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .directive('icon', icon);

    function icon() {
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