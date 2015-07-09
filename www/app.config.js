angular
		.module('CriticalRoll')
		.config(function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise("/");

			$stateProvider
					.state('main', {
						url: '/',
						templateUrl: 'layout/main/content.html'
						//controller: 'MainCtrl'
					});
		})