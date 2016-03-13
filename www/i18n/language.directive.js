(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .directive('crCompileTemplate', crCompileTemplate);

    function crCompileTemplate($compile, $parse) {

        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, element, attr) {
            var parsed = $parse(attr.ngBindHtml);

            function getStringValue() {
                return (parsed(scope) || '').toString();
            }

            function compile() {
                //The -9999 makes it skip directives so that we do not recompile ourselves
                $compile(element, null, -9999)(scope);
            }

            //Recompile if the template changes
            scope.$watch(getStringValue, compile);
        }
    }
})();