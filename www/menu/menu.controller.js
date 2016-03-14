(function () {
  'use strict';

  angular
    .module('CriticalRoll')
    .controller('MenuController', MenuController);

  function MenuController($cordovaSocialSharing, $translate, $ionicSideMenuDelegate) {

    var vm = this;

    var linkURLs = {
      "share": "https://play.google.com/store/apps/details?id=com.vanillaicecreamstudio.criticalroll",
      "pathfinderRPG": "http://paizo.com/pathfinderRPG/",
      "dnd5": "http://dnd.wizards.com/",
      "dnd3": "http://www.d20srd.org/"
    };

    vm.toggleMenu = toggleMenu;

    vm.share = share;

    vm.openLink = openLink;

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

  }

})();
