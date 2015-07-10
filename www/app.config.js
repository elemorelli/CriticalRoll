angular
		.module('CriticalRoll')
		.config(function ($stateProvider, $urlRouterProvider) {


			if (window.localStorage['didTutorial'] === "true") {
				$urlRouterProvider.otherwise('/');
			} else {
				$urlRouterProvider.otherwise('/intro');
			}

			$stateProvider
					.state('main', {
						url: '/',
						templateUrl: 'main/main.html',
						controller: 'CardsController'
					}).state('intro', {
						url: '/intro',
						templateUrl: 'intro/intro.html',
						controller: 'IntroController'
					}).state('license', {
						url: '/license',
						templateUrl: 'main/license.html',
						controller: 'LicenseController'
					});
		})