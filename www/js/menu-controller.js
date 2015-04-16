CriticalRoll.controller('MenuController', function($rootScope, $scope, $ionicPopover) {

  $rootScope.openPopover = function($event, templateName, text) {

    // TODO: The Android's Popover is too ugly and it's not posible to force a
    // platform class, let's hack the body class until something better appears.
    document.body.classList.remove('platform-ios');
    document.body.classList.remove('platform-android');
    document.body.classList.remove('platform-ionic');
    document.body.classList.add('platform-ios');

    $scope.popoverText = popoverTexts[text];
    $ionicPopover.fromTemplateUrl('templates/popover-' + templateName + '.html', {
        scope: $scope
      })
      .then(function(popover) {
        $scope.popover = popover;
        $scope.popover.show($event);
      });
  };

  $scope.closePopover = function() {
    $scope.popover.hide();
  };

  $scope.showOption = function(option) {
    $rootScope.$emit('showOption', option);
    $scope.popover.hide();
  };

  $scope.removeAll = function() {
    $rootScope.$emit('removeAll');
  }
});
