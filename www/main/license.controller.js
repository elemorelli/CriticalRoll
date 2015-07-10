angular
		.module('CriticalRoll')
		.controller('LicenseController', function ($scope, $state) {

			$scope.back = function () {
				$state.go('intro');
			};

		});