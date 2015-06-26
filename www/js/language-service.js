CriticalRoll.service('LanguageService', function ($translate) {

	this.languages = [{
		"id": "en",
		"label": "English"
	}, {
		"id": "es",
		"label": "Español"
	}]

	this.setLanguage = function (lang) {
		$translate.use(lang);
		window.localStorage['language'] = lang;
	};

	this.getLanguage = function () {
		for (var language in this.languages) {
			var lang = this.languages[language];
			if (lang.id == $translate.use())
				return lang;
		}
	};
});

CriticalRoll.config(['$translateProvider', function ($translateProvider) {

	$translateProvider.useStaticFilesLoader({
		prefix: '/i18n/',
		suffix: '/app.json'
	});
	$translateProvider.preferredLanguage(window.localStorage['language'] || 'en');
	$translateProvider.fallbackLanguage('en');
}]);