angular.module('CriticalRoll').controller('LanguageController', function ($scope, LanguageService) {

	$scope.selected = LanguageService.getLanguage();

	$scope.setLanguage = LanguageService.setLanguage;

});