(function () {
    'use strict';

    angular
        .module('CriticalRoll')
        .controller('MenuController', MenuController);

    function MenuController($cordovaSocialSharing, $translate, $ionicSideMenuDelegate, emailService) {

        var vm = this;

        var linkURLs = {
            "share": "https://play.google.com/store/apps/details?id=com.vanillaicecreamstudio.criticalroll",
            "pathfinderRPG": "http://paizo.com/pathfinderRPG/"
        };

        vm.toggleMenu = function () {
            if ($ionicSideMenuDelegate.isOpenLeft()) {
                $ionicSideMenuDelegate.toggleLeft(false);
            } else {
                $ionicSideMenuDelegate.toggleLeft(true);
            }
        };

        vm.share = function () {
            //if (ionic.Platform.isWindowsPhone()) {
            // linkURL = "WP URL";
            //} else if (ionic.Platform.isIOS()) {
            // var url = "IOS URL";
            //}

            $cordovaSocialSharing.share(
                $translate.instant('SHARE-MESSAGE'),
                $translate.instant('SHARE-SUBJECT'),
                null,
                linkURLs.share
            );
        };

        vm.openLink = function (linkName) {
            window.open(linkURLs[linkName], '_system');
            return false;
        };

        vm.reportBug = function () {
            emailService.compose("BUG");
        };
    }

})();