angular
		.module('CriticalRoll')
		.controller('LanguageController', function ($scope, LanguageService) {
	$scope.languages = LanguageService.languages;

	$scope.selected = LanguageService.getLanguage();

	$scope.changeLanguage = function () {
		LanguageService.setLanguage($scope.selected.id);
	};

})