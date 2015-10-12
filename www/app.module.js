angular.module('CriticalRoll', ['ionic', 'ngCordova', 'ionic-material', 'pascalprecht.translate', 'ngSanitize']).run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});