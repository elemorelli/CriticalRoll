(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .directive('crIcon', crIcon);

    function crIcon() {

        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                type: "@type"
            },
            templateUrl: 'icon/icon.template.html'
        };

        return directive;
    }

})();