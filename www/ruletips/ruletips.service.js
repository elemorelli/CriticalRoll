angular.module('CriticalRoll').service('RuletipsService', function ($ionicPopup, $filter) {

	this.ruletips = [
		{
			"title": "RULETIP-SECTION-DAMAGE",
			"rules": [
				"NONLETHAL-DAMAGE",
				"OBJECT-DAMAGE",
				"STATUS-NEGATIVE-LEVEL"
			]
		},
		{
			"title": "RULETIP-SECTION-SAVES",
			"rules": [
				"UNTIL-HEALED",
				"SAVE-CRITICAL",
				"SAVE-FUMBLE"
			]
		},
		{
			"title": "RULETIP-SECTION-ABILITY",
			"rules": [
				"ABILITY-DAMAGE",
				"ABILITY-DRAIN",
				"ABILITY-STR",
				"ABILITY-DEX",
				"ABILITY-CON",
				"ABILITY-INT",
				"ABILITY-WIS",
				"ABILITY-CHA"
			]
		},
		{
			"title": "RULETIP-SECTION-STATUS",
			"rules": [
				"STATUS-BLEED",
				"STATUS-BLINDED",
				"STATUS-CONFUSED",
				"STATUS-DAZED",
				"STATUS-DAZZLED",
				"STATUS-DEAFENED",
				"STATUS-DYING",
				"STATUS-ENTANGLED",
				"STATUS-EXHAUSTED",
				"STATUS-FATIGUED",
				"STATUS-FLAT-FOOTED",
				"STATUS-FRIGHTENED",
				"STATUS-HELPLESS",
				"STATUS-INCORPOREAL",
				"STATUS-INVISIBLE",
				"STATUS-NAUSEATED",
				"STATUS-PANICKED",
				"STATUS-PARALIZED",
				"STATUS-PETRIFIED",
				"STATUS-PRONE",
				"STATUS-SHAKEN",
				"STATUS-SICKENED",
				"STATUS-STABLE",
				"STATUS-STAGGERED",
				"STATUS-STUNNED",
				"STATUS-UNCONSCIOUS"
			]
		}
	];

	this.openRuletip = function (ruletipType) {

		$ionicPopup.alert({
			title: $filter('translate')(ruletipType + "-TITLE"),
			template: $filter('translate')(ruletipType + "-TEXT")
		});
	};

});