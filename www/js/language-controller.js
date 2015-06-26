CriticalRoll.controller('LanguageController', function ($scope, $translate) {
	$scope.changeLanguage = function () {
		$translate.use($rootScope.languageSelected.id);
		window.localStorage['language'] = $scope.languageSelected.id;
	};

	$scope.getLanguage = function (id) {
		for (var language in $scope.languages) {
			var lang = $scope.languages[language];
			if (lang.id == id)
				return lang;
		}
	};

	$scope.languages = [{
		"id": "en",
		"label": "English"
	}, {
		"id": "es",
		"label": "Español"
	}]

	$scope.languageSelected = $scope.getLanguage($translate.use());

});

CriticalRoll.config(['$translateProvider', function ($translateProvider) {

	$translateProvider.useStaticFilesLoader({
		prefix: '/i18n/',
		suffix: '/app.json'
	});
	$translateProvider.preferredLanguage(window.localStorage['language'] || 'en');
	$translateProvider.fallbackLanguage('en');
}]);