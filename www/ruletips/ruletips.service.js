(function () {
  'use strict';

  angular
    .module('CriticalRoll')
    .service('RuletipsService', RuletipsService);

  function RuletipsService($ionicPopup, $filter, SettingsService) {

    this.ruletips = ruletips();

    this.openRuletip = openRuletip;

    function openRuletip(ruletipType) {

      $ionicPopup.alert({
        title: $filter('translate')(ruletipType + "-TITLE"),
        template: $filter('translate')(ruletipType + "-TEXT")
      });
    }

    function ruletips() {

      if (SettingsService.values.system == "dnd5") {
        return [
          {
            "title": "RULETIP-SECTION-DAMAGE",
            "rules": ["ABILITY-REDUCTION", "OBJECT-DAMAGE"]
          },
          {
            "title": "RULETIP-SECTION-SAVES",
            "rules": ["SAVE-CRITICAL", "SAVE-FUMBLE", "UNTIL-HEALED"]
          },
          {
            "title": "RULETIP-SECTION-ABILITY",
            "rules": ["ABILITY-STR", "ABILITY-DEX", "ABILITY-CON", "ABILITY-INT", "ABILITY-WIS",
              "ABILITY-CHA"]
          },
          {
            "title": "RULETIP-SECTION-STATUS",
            "rules": ["STATUS-BLINDED", "STATUS-CHARMED", "STATUS-CONFUSED", "STATUS-DEAFENED", "STATUS-EXHAUSTED",
              "STATUS-FRIGHTENED", "STATUS-INCAPACITATED", "STATUS-INCORPOREAL", "STATUS-INVISIBLE",
              "STATUS-LIFE-DRAIN", "STATUS-PETRIFIED", "STATUS-POISONED", "STATUS-PRONE", "STATUS-RESTRAINED",
              "STATUS-STUNNED", "STATUS-UNCONSCIOUS"]
          }
        ];
      } else {
        return [
          {
            "title": "RULETIP-SECTION-DAMAGE",
            "rules": ["ABILITY-DAMAGE", "NONLETHAL-DAMAGE", "OBJECT-DAMAGE", "STATUS-NEGATIVE-LEVEL"]
          },
          {
            "title": "RULETIP-SECTION-SAVES",
            "rules": ["UNTIL-HEALED", "SAVE-CRITICAL", "SAVE-FUMBLE"]
          },
          {
            "title": "RULETIP-SECTION-ABILITY",
            "rules": ["ABILITY-DRAIN", "ABILITY-STR", "ABILITY-DEX", "ABILITY-CON", "ABILITY-INT", "ABILITY-WIS",
              "ABILITY-CHA"]
          },
          {
            "title": "RULETIP-SECTION-STATUS",
            "rules": ["STATUS-BLEED", "STATUS-BLINDED", "STATUS-CONFUSED", "STATUS-DAZED", "STATUS-DAZZLED",
              "STATUS-DEAFENED", "STATUS-DYING", "STATUS-ENTANGLED", "STATUS-EXHAUSTED", "STATUS-FATIGUED",
              "STATUS-FLAT-FOOTED", "STATUS-FRIGHTENED", "STATUS-HELPLESS", "STATUS-INCORPOREAL", "STATUS-INVISIBLE",
              "STATUS-NAUSEATED", "STATUS-PANICKED", "STATUS-PARALYZED", "STATUS-PETRIFIED", "STATUS-PRONE",
              "STATUS-SHAKEN", "STATUS-SICKENED", "STATUS-STABLE", "STATUS-STAGGERED", "STATUS-STUNNED",
              "STATUS-UNCONSCIOUS"]
          }
        ];
      }
    }
  }

})();
