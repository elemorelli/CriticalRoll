angular.module('CriticalRoll').controller('LanguageController', function ($scope, LanguageService) {

	$scope.language = {};

	$scope.language.selected = LanguageService.getLanguage();

	$scope.language.set = function(lang) {
		$scope.language.selected = lang;
		LanguageService.setLanguage(lang);
	}

});