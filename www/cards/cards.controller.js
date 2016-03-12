(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .controller('CardsController', CardsController);

    function CardsController($scope, CardService, RuletipsService, ionicMaterialInk) {

        $scope.drawnCards = CardService.drawnCards;

        $scope.hasCardsToDraw = CardService.hasCardsToDraw;

        $scope.drawCard = function (primaryType, secondaryType) {
            ionicMaterialInk.displayEffect();
            CardService.drawCard(primaryType, secondaryType);
        };

        $scope.removeAll = function () {
            ionicMaterialInk.displayEffect();
            CardService.removeAll();
        };

        $scope.openRuletip = RuletipsService.openRuletip;
    }

})();