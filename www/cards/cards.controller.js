(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .controller('CardsController', CardsController);

    function CardsController(CardService, RuletipsService, ionicMaterialInk) {

        var vm = this;

        vm.drawnCards = CardService.drawnCards;

        vm.hasCardsToDraw = CardService.hasCardsToDraw;

        vm.drawCard = function (primaryType, secondaryType) {
            ionicMaterialInk.displayEffect();
            CardService.drawCard(primaryType, secondaryType);
        };

        vm.removeAll = function () {
            ionicMaterialInk.displayEffect();
            CardService.removeAll();
        };

        vm.openRuletip = RuletipsService.openRuletip;
    }

})();