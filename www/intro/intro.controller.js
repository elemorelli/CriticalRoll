angular
		.module('CriticalRoll')
		.controller('IntroController', function ($scope, $state, $ionicSlideBoxDelegate, $ionicHistory, $timeout, PopoverService) {

			$scope.slideIndex = 0;

			$scope.slideTitle = ["¡Bienvenido!", "¿Cómo se usa?", "¿Cómo se usa?", "Unas últimas palabras..."]

			$scope.next = function () {
				if ($scope.slideIndex < $scope.slidesCount()) {
					$ionicSlideBoxDelegate.next();
				} else {
					window.localStorage['didTutorial'] = true;
					$state.go('main');
					$timeout(function () {
						$scope.slideIndex = 0;
						$ionicHistory.clearHistory();
					}, 1000);
				}
			};

			$scope.showLicense = function () {
				$state.go('license');
				$scope.slideIndex = $scope.slidesCount();
			};

			$scope.previous = function () {
				$ionicSlideBoxDelegate.previous();
			};

			$scope.slideChanged = function (index) {
				$scope.slideIndex = index;
			};

			$scope.slidesCount = function () {
				return $ionicSlideBoxDelegate.slidesCount() - 1;
			};

			$scope.openPopover = function ($event, templateName, text) {
				PopoverService.openPopover($event, templateName, text, $scope);
			};

			$scope.card = {
				primaryType: "critical",
				secondaryType: "mustache",
				title: "INTRO-EXAMPLE-TITLE",
				text: "INTRO-EXAMPLE-TEXT",
			}
		});
