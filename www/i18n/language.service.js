angular.module('CriticalRoll').service('LanguageService', function ($translate) {

	this.setLanguage = function (lang) {
		$translate.use(lang);
		window.localStorage.language = lang;
	};

	this.getLanguage = function () {
		return $translate.use();
	};

}).config(['$translateProvider', function ($translateProvider) {

	var i18nPath = 'i18n/';

	$translateProvider.useStaticFilesLoader({
			files: [{
				prefix: i18nPath,
				suffix: '/app.json'
			}, {
				prefix: i18nPath,
				suffix: '/ruletips.json'
			}, {
				prefix: i18nPath,
				suffix: '/help.json'
			}, {
				prefix: i18nPath,
				suffix: '/settings.json'
			}, {
				prefix: i18nPath,
				suffix: '/critical-bludgeoning.json'
			}, {
				prefix: i18nPath,
				suffix: '/critical-magic.json'
			}, {
				prefix: i18nPath,
				suffix: '/critical-piercing.json'
			}, {
				prefix: i18nPath,
				suffix: '/critical-slashing.json'
			}, {
				prefix: i18nPath,
				suffix: '/fumble-magic.json'
			}, {
				prefix: i18nPath,
				suffix: '/fumble-melee.json'
			}, {
				prefix: i18nPath,
				suffix: '/fumble-natural.json'
			}, {
				prefix: i18nPath,
				suffix: '/fumble-ranged.json'
			}]
		}
	);

	$translateProvider.preferredLanguage(window.localStorage.language || 'en');
	$translateProvider.fallbackLanguage('en');
}]);