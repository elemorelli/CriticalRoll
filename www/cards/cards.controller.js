(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .controller('CardsController', CardsController);

    function CardsController(CardService, RuletipsService, ionicMaterialInk) {

        var vm = this;

        vm.drawnCards = CardService.drawnCards;

        vm.hasCardsToDraw = CardService.hasCardsToDraw;

        vm.drawCard = drawCard;

        vm.removeAll = removeAll;

        vm.openRuletip = RuletipsService.openRuletip;

        function drawCard(primaryType, secondaryType) {
            ionicMaterialInk.displayEffect();
            CardService.drawCard(primaryType, secondaryType);
        }

        function removeAll() {
            ionicMaterialInk.displayEffect();
            CardService.removeAll();
        }

    }

})();