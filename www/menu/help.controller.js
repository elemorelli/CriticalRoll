angular.module('CriticalRoll').controller('HelpController', function ($scope) {

	$scope.sendFeedback = function () {
		var feedbackURL = "https://gitreports.com/issue/gemorelli/CriticalRoll";
		window.open(feedbackURL, '_system');
		return false;
	};

});
