angular.module('CriticalRoll').directive('icon', function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			type:"@type"
		},
		templateUrl: 'icon/icon.html'
	};
});