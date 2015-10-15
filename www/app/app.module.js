angular.module('CriticalRoll', ['ionic', 'ngCordova', 'ionic-material', 'pascalprecht.translate', 'templates']).run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});