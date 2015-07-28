angular.module('CriticalRoll').controller('LanguageController', function ($scope, LanguageService) {

	$scope.languageSelected = LanguageService.getLanguage();

	$scope.setLanguage = LanguageService.setLanguage;

});