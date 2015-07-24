angular.module('CriticalRoll', ['ionic', 'ngCordova', 'pascalprecht.translate', 'ngSanitize']).run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
	$ionicPlatform.onHardwareBackButton(function () {
	});
});