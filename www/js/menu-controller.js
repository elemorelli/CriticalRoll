CriticalRoll.controller('MenuController', function($rootScope, $scope, $ionicPopover, LanguageService) {

  $rootScope.openPopover = function($event, templateName, text) {

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