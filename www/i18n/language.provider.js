(function () {
  'use strict';

  angular
    .module('CriticalRoll')
    .config(['$translateProvider', translateProvider]);

  function translateProvider($translateProvider) {

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

    var settings = JSON.parse(window.localStorage.settings ? window.localStorage.settings : "{}");

    if (!settings.system)
      settings.system = 'pfrpg';

    if (!settings.language)
      settings.language = 'en';

    $translateProvider.preferredLanguage(settings.system + '-' + settings.language);
    $translateProvider.fallbackLanguage('pfrpg-en');
  }

})();
