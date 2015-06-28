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


	/*
	 TODO: VER DE CAMBIAR EL STATIC FILES LAODER POR EL PARTIAL LOADER PARA LEVANTAR LOS DIFERNETES ARCHIVOS DE CARTAS
	 TODO: bower remove loader?
	 */
	$translateProvider.useStaticFilesLoader(
			{
				files: [{
					prefix: 'i18n/',
					suffix: '/app.json'
				}, {
					prefix: 'i18n/',
					suffix: '/critical-bludgeoning.json'
				}, {
					prefix: 'i18n/',
					suffix: '/critical-magic.json'
				}, {
					prefix: 'i18n/',
					suffix: '/critical-piercing.json'
				}, {
					prefix: 'i18n/',
					suffix: '/critical-slashing.json'
				}, {
					prefix: 'i18n/',
					suffix: '/fumble-magic.json'
				}, {
					prefix: 'i18n/',
					suffix: '/fumble-melee.json'
				}, {
					prefix: 'i18n/',
					suffix: '/fumble-natural.json'
				}, {
					prefix: 'i18n/',
					suffix: '/fumble-ranged.json'
				}, {
					prefix: 'i18n/',
					suffix: '/popover.json'
				}]
			}
	);

	$translateProvider.preferredLanguage(window.localStorage['language'] || 'en');
	$translateProvider.fallbackLanguage('en');
}])
;