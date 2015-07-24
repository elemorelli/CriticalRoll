angular.module('CriticalRoll')
		.service('PopoverService', function ($ionicPopover) {

			var self = this;

			self.openPopover = function ($event, text, $scope) {

				$scope.popoverText = text;
				$ionicPopover.fromTemplateUrl('main/popover.html', {
					scope: $scope
				}).then(function (popover) {
					self.popover = popover;
					self.popover.show($event);
				});
			};

		});