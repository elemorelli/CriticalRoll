(function () {
  'use strict';

  angular
    .module('CriticalRoll')
    .service('emailService', emailService);

  function emailService($cordovaEmailComposer, $filter) {

    this.compose = compose;

    function compose(key) {
      var email = {
        to: 'vanillaicecreamstudio@gmail.com',
        subject: $filter('translate')('MAIL-' + key + '-SUBJECT'),
        body: $filter('translate')('MAIL-' + key + '-BODY'),
        isHtml: true
      };

      if (ionic.Platform.isWebView() && $cordovaEmailComposer.isAvailable()) {
        $cordovaEmailComposer.open(email);
      } else {
        window.open("mailto:" + email.to + '?subject=' + email.subject + '&body=' + email.body);
      }
    }
  }

})();
