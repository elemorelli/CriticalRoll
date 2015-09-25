angular.module('CriticalRoll').directive('card', function () {
	return {
		restrict: 'E',
		templateUrl: 'main/card.html'
	}
}).filter('hhh', function ($sce) {
	return function (input) {
		var replacedText = input.replace(/%([\w\s-]+)=([\w\s-]+)%/gi,
			'<a class="popover-link" ng-click="openPopover($event, &apos;$1&apos;)">$2</a>');
		return $sce.trustAsHtml(replacedText);
	}
}).directive('compileTemplate', function ($compile, $parse) {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			var parsed = $parse(attr.ngBindHtml);

			function getStringValue() {
				return (parsed(scope) || '').toString();
			}

			function compile() {
				//The -9999 makes it skip directives so that we do not recompile ourselves
				$compile(element, null, -9999)(scope);
			}

			//Recompile if the template changes
			scope.$watch(getStringValue, compile);
		}
	}
});