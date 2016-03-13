(function () {
  'use strict';

  angular
    .module('CriticalRoll')
    .controller('RuletipsController', RuletipsController);

  function RuletipsController(RuletipsService) {

    var vm = this;

    vm.ruletips = RuletipsService.ruletips;

    vm.openRuletip = RuletipsService.openRuletip;

  }

})();
