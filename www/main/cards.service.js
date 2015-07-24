angular.module('CriticalRoll').service('CardService', function ($ionicScrollDelegate) {

	var self = this;
	this.drawnCards = [];

	this.drawCard = function (primaryType, secondaryType) {
		var cardQuantity = 52;
		var randomIndex = Math.floor(Math.random() * cardQuantity) + 1;
		var cardNameTemplate = 'CARD-' + primaryType.toUpperCase() + '-' + secondaryType.toUpperCase() + '-' + randomIndex;

		var cardDrawn = {
			primaryType: primaryType,
			secondaryType: secondaryType,
			title: cardNameTemplate + '-TITLE',
			text: cardNameTemplate + '-TEXT'
		};

		self.drawnCards.push(cardDrawn);
		$ionicScrollDelegate.scrollBottom(true);
	};

	this.removeAll = function () {
		self.drawnCards.length = 0;
		$ionicScrollDelegate.scrollTop(true);
	};

});