angular.module('CriticalRoll').service('RuletipsService', function ($ionicPopover) {

	var self = this;

	self.openRuletip = function ($event, text, $scope) {

		$scope.popoverText = text;
		$ionicPopover.fromTemplateUrl('main/ruletips.html', {
			scope: $scope
		}).then(function (popover) {
			self.popover = popover;
			self.popover.show($event);
		});
	};

});