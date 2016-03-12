angular.module('CriticalRoll').service('emailService', function ($cordovaEmailComposer, $filter) {

    this.compose = function (key) {
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
    };

});