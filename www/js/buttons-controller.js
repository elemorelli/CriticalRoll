criticalRoller.controller('ButtonsController', function($rootScope, $scope) {

  $scope.drawCard = function(primaryType, secondaryType) {
    $rootScope.$emit('drawCard', primaryType, secondaryType);
  };

});
