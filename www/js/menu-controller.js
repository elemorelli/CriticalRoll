criticalRoller.controller('MenuController', function($rootScope, $scope, $ionicPopover) {

  $scope.openPopover = function($event, templateName) {
    $ionicPopover.fromTemplateUrl('templates/popover/popover-' + templateName + '.html', {
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
