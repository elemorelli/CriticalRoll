angular
		.module('CriticalRoll')
		.directive('card', function () {
			return {
				restrict: 'E',
				templateUrl: 'main/card.html'
			}
		})
		.directive('contribute', function () {
			return {
				restrict: 'E',
				templateUrl: 'menu/contribute.html'
			}
		})
		.directive('cardTitle', function ($compile, $translate, $sce) {
			return {
				restrict: 'E',
				replace: true,
				link: function (scope, element, attr) {
					$translate(attr.content).then(function (translatedText) {
						element.html(translatedText);
						$compile(element.contents())(scope);
					});
				}
			}
		})
		.directive('cardText', function ($compile, $translate, $sce) {
			return {
				restrict: 'E',
				replace: true,
				link: function (scope, element, attr) {
					scope.$watch(attr.content, function (translateKey) {
						$translate(translateKey).then(function (translatedText) {
							var replacedText = translatedText.replace(/%([\w\s-]+)=([\w\s-]+)%/gi,
									'<a class="popover-link" ng-click="openPopover($event, &apos;$1&apos;)">$2</a>');
							var parsedText = $sce.trustAsHtml(replacedText);
							element.html(parsedText);
							$compile(element.contents())(scope);
						});
					}, true);
				}
			}
		});