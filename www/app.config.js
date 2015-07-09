angular
		.module('CriticalRoll')
		.config(function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise("/");

			$stateProvider
					.state('main', {
						url: '/',
						templateUrl: 'layout/main.html',
						controller: 'CardsController'
					});
		})