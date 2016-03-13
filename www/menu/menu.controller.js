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

    vm.toggleMenu = toggleMenu;

    vm.share = share;

    vm.openLink = openLink;

    vm.reportBug = reportBug;

    function toggleMenu() {
      if ($ionicSideMenuDelegate.isOpenLeft()) {
        $ionicSideMenuDelegate.toggleLeft(false);
      } else {
        $ionicSideMenuDelegate.toggleLeft(true);
      }
    }

    function share() {
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
    }

    function openLink(linkName) {
      window.open(linkURLs[linkName], '_system');
      return false;
    }

    function reportBug() {
      emailService.compose("BUG");
    }
  }

})();
