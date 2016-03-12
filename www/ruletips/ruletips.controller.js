(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .controller('RuletipsController', RuletipsController);

    function RuletipsController($scope, $translate, RuletipsService) {

        $scope.ruletips = RuletipsService.ruletips;

        $scope.openRuletip = RuletipsService.openRuletip;

    }

})();