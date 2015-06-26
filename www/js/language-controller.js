CriticalRoll.controller('LanguageController', function ($scope, $translate) {
	$scope.changeLanguage = function () {
		$translate.use($scope.selected.id);
		window.localStorage['language'] = $scope.selected.id;
	};

	$scope.getLanguage = function (id) {
		for (language in $scope.languages) {
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

	$scope.selected = $scope.getLanguage($translate.use());

});

CriticalRoll.config(['$translateProvider', function ($translateProvider) {

	$translateProvider.useStaticFilesLoader({
		prefix: 'i18n/',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage(window.localStorage['language'] || 'en');
	$translateProvider.fallbackLanguage('en');
}]);