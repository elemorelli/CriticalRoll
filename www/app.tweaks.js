var openLink = function (href) {
	window.open(href, '_system');
	return false;
};

// Horrible hack for WindowsPhone: https://github.com/driftyco/ionic/issues/2150
if (ionic.Platform.isWindowsPhone()) {
	$document.find('button').attr('data-tap-disabled', true);
}