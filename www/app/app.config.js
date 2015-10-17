angular.module('CriticalRoll').config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'menu.html',
		controller: 'MenuController'
	}).state('app.home', {
		url: '/home',
		views: {
			'menuContent': {
				templateUrl: 'main.html',
				controller: 'CardsController'
			}
		}
	}).state('app.license', {
		url: '/license',
		views: {
			'menuContent': {
				templateUrl: 'license.html'
			}
		}
	}).state('app.help', {
		url: '/help',
		views: {
			'menuContent': {
				templateUrl: 'help.html',
				controller: 'HelpController'
			}
		}
	});

	$urlRouterProvider.otherwise('/app/home');
});

// Horrible hack for WindowsPhone: https://github.com/driftyco/ionic/issues/2150
if (ionic.Platform.isWindowsPhone()) {
	$document.find('button').attr('data-tap-disabled', true);
}