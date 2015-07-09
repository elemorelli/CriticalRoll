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
						templateUrl: 'layout/main.html',
						controller: 'CardsController'
					}).state('intro', {
						url: '/intro',
						templateUrl: 'layout/intro.html',
						controller: 'IntroController'
					});
		})