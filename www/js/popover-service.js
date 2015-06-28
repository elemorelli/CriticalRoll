CriticalRoll.service('PopoverService', function ($ionicPopover) {

	var self = this;

	this.openPopover = function ($event, templateName, text, $scope) {

		$scope.popoverText = text;
		$ionicPopover.fromTemplateUrl('templates/popover-' + templateName + '.html', {
			scope: $scope
		}).then(function (popover) {
			self.popover = popover;
			self.popover.show($event);
		});
	};

	this.closePopover = function () {
		self.popover.hide();
	}
});