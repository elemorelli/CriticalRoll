angular.module('CriticalRoll').controller('HelpController', function ($scope) {

	var linkURLs = {
		"feedback": "https://gitreports.com/issue/gemorelli/CriticalRoll",
		"pathfinderRPG": "http://paizo.com/pathfinderRPG/"
	};

	$scope.openLink = function (linkName) {
		window.open(linkURLs[linkName], '_system');
		return false;
	};

});
