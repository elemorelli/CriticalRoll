var CriticalRoll = angular.module('CriticalRoll', ['ionic', 'ngCordova', 'pascalprecht.translate', 'ngSanitize']);

CriticalRoll.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {

		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});

var openLink = function (href) {
	window.open(href, '_system');
	return false;
};