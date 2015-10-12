angular.module('CriticalRoll').service('RuletipsService', function ($ionicPopup, $filter) {

	this.openRuletip = function (ruletipType) {

		$ionicPopup.alert({
			title: $filter('translate')(ruletipType + "-TITLE"),
			template: $filter('translate')(ruletipType)
		});
	};

});