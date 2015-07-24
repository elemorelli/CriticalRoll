angular.module('CriticalRoll')
		.config(function ($stateProvider, $urlRouterProvider) {

			//if (window.localStorage['didTutorial'] === "true") {
			// 	Run first time intro
			//}

			$stateProvider
					.state('app', {
						url: '/app',
						abstract: true,
						templateUrl: 'main/menu.html',
						controller: 'MenuController'
					}).state('app.home', {
						url: '/home',
						views: {
							'menuContent': {
								templateUrl: 'main/main.html',
								controller: 'CardsController'
							}
						}
					}).state('app.license', {
						url: '/license',
						views: {
							'menuContent': {
								templateUrl: 'main/license.html',
							}
						}
					}).state('app.contribute', {
						url: '/contribute',
						views: {
							'menuContent': {
								templateUrl: 'menu/contribute.html',
							}
						}
					});

			$urlRouterProvider.otherwise('/app/home');
		});