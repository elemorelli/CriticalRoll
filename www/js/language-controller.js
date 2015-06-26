CriticalRoll.controller('LanguageController', function ($scope, $translate) {
	$scope.changeLanguage = function () {
		$translate.use($scope.selected.id);
		window.localStorage['language'] = $scope.selected.id;
	};

	$scope.getLanguage = function (id) {
		for (language in $scope.languages) {
			var lang = $scope.languages[language];
			if (lang.id == id)
				return lang;
		}
	};

	$scope.languages = [{
		"id": "en",
		"label": "English"
	}, {
		"id": "es",
		"label": "Español"
	}]

	$scope.selected = $scope.getLanguage($translate.use());

});

CriticalRoll.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('en', {
		'HELP': 'Help!',
		'HELP-TITLE': 'Help! What do these buttons do?',
		'HELP-1': 'You just confirmed a critical hit or got struck by an awful fumble? ' +
		'This is the moment to add more drama to the fight!',
		'HELP-2': 'Weapons with critical multiplier of ',
		'HELP-3': ' can only draw a single critical effect, but weapons with a ',
		'HELP-4': ' and ',
		'HELP-5': ' multipler draw two and three effects respectively and you can choose the best!',
		'HELP-6': 'In a case of a nasty fumble, just draw one effect. Some can be pretty devastating!',
		'HELP-7': 'Have fun!',

		'ABOUT': 'About',
		'ABOUT-TITLE': 'About CriticalRoll',
		'ABOUT-1': 'This App is inspired on Paizo\'s ',
		'ABOUT-2': ' and ',
		'ABOUT-3': ' for Android and iOS. These are based in the ',
		'ABOUT-4': ' and ',
		'ABOUT-5': ' decks.',
		'ABOUT-6': 'You should check these awesome options and see if they suit you.',
		'ABOUT-7': 'This was made as an open alternative just to have room to make some custom improvements. ' +
		'It\'s not endorsed by  Paizo Publishing, LLC or Wizards of the Coast, Inc. ' +
		'Please, refer to the "License" option on the menu for more information.',
		'ABOUT-8': 'Do you wish to contribute to this project? Awesome! Just check the "How to contribute" option.',

		'LICENSE': 'License',
		'LICENSE-TITLE': 'License: Boring legal stuff',

		'CONTRIBUTE': 'How to contribute',
		'CONTRIBUTE-TITLE': 'How to contribute to this awesome project',
		'CONTRIBUTE-1': 'This an open source App',
		'CONTRIBUTE-2': 'And what does it mean?',
		'CONTRIBUTE-3': 'It means that anybody can download, use, modify or redistribute the source code of this app' +
		' in order to improve it or do a derivate work. The only concern is that the content data is protected under' +
		' the Open Game License and if you want to include it, you should check the License option for more details.',
		'CONTRIBUTE-4': 'Can I help?',
		'CONTRIBUTE-5': 'Sure! There\'s always room for suggestions, enhancements, fixes and stuff to do.',
		'CONTRIBUTE-6': 'Are you a programmer?',
		'CONTRIBUTE-7': 'Check the repository!',
		'CONTRIBUTE-8': 'This was made using cool technologies and there\'s always more stuff to do.',
		'CONTRIBUTE-9': 'Did you found an error or a bug?',
		'CONTRIBUTE-10': 'Report it here!',
		'CONTRIBUTE-11': 'So we can fix it for everyone.',
		'CONTRIBUTE-12': 'Can you translate this app to your language?',
		'CONTRIBUTE-13': 'Just send us an email',
		'CONTRIBUTE-14': 'and we\'ll gladly accept your help!',
		'CONTRIBUTE-15': 'Do you want to donate money?',
		'CONTRIBUTE-16': 'It\'s not necessary. Just',
		'CONTRIBUTE-17': 'share the word with your friends!',
		'CONTRIBUTE-18': 'Why should you care?',
		'CONTRIBUTE-19': 'Well... Nobody forces you.',
		'CONTRIBUTE-20': 'But this App is distributed for free and without ads, just for the love to the game. ' +
		'It was made using the game\'s own open system and open technologies. ' +
		'Each bit of contribution helps a lot, so don\'t be afraid to give your own!',

		'LANGUAGE': 'Language',

		'SLASHING-WEAPON': 'Slashing weapon',
		'PIERCING-WEAPON': 'Piercing weapon',
		'BLUDGEONING-WEAPON': 'Bludgeoning weapon',
		'MAGIC-ATTACK': 'Magic attack',
		'MELEE-ATTACK': 'Melee attack',
		'RANGED-ATTACK': 'Ranged attack',
		'NATURAL-ATTACK': 'Natural attack'
	});

	$translateProvider.translations('es', {
		'HELP': 'Ayuda!',
		'HELP-TITLE': '¡Ayuda! ¿Qué hacen estos botones?',
		'HELP-1': '¿Acabas de confirmar un golpe crítico o fuiste golpeado por una terrible pifia? ' +
		'¡Este es el momento de añadir más drama a la pelea!',
		'HELP-2': 'Armas con un multiplicador crítico de ',
		'HELP-3': ' sólo pueden can only sacar un único efecto crítico, pero armas con un multiplicador de ',
		'HELP-4': ' y ',
		'HELP-5': ' ¡sacan dos y tres efectos respectivamente para que elijas el más conveniente!',
		'HELP-6': 'En caso de una horrible pifia, sólo saca un efecto. Algunos pueden ser muy devastadores.',
		'HELP-7': '¡Diviértete!',

		'ABOUT': 'Acerca',
		'ABOUT-TITLE': 'Acerca de CriticalRoll',
		'ABOUT-1': 'Esta App está inspirada en ',
		'ABOUT-2': ' y ',
		'ABOUT-3': ' de Paizo para Android and iOS, las cuales están basadas en los mazos de cartas ',
		'ABOUT-4': ' y ',
		'ABOUT-5': '.',
		'ABOUT-6': 'Deberías revisar esas geniales opciones y decidir si te convienen.',
		'ABOUT-7': 'Esta aplicación fue hecha como una alternativa abierta tan sólo para tener lugar de hacer ' +
		'mejoras personalizadas. No está avalada por Paizo Publishing, LLC o Wizards of the Coast, Inc. ' +
		'Por favor, revisa la opción "Licencia" en el menú para más información.',
		'ABOUT-8': '¿Quieres contribuir a este proyecto? ¡Genial! Tan sólo revisa la sección "Cómo ayudar" del menú.',

		'LICENSE': 'Licencia',
		'LICENSE-TITLE': 'Licencia: Cosas legales aburridas',

		'CONTRIBUTE': 'Cómo colaborar',
		'CONTRIBUTE-TITLE': '¿Cómo colaborar a este genial proyecto?',
		'CONTRIBUTE-1': 'Esto es una aplicación de código abierto',
		'CONTRIBUTE-2': '¿Y eso qué significa?',
		'CONTRIBUTE-3': 'Significa que cualquiera puede descargar, usar, modificar o redistribuir el código fuente' +
		' para mejorar la aplicación o hacer un trabajo derivado. El único cuidado es que los datos del contenido' +
		' está protegido bajo la Open Game License (Licencia de Juego Abierto) y si quieres incluirlos, deberías' +
		' revisar la sección de Licencia para más detalles.',
		'CONTRIBUTE-4': '¿Puedo ayudar?',
		'CONTRIBUTE-5': '¡Por supuesto! Siempre hay lugar para sugerencias, mejoras, arreglos y cosas para hacer.',
		'CONTRIBUTE-6': '¿Sos un programados?',
		'CONTRIBUTE-7': '¡Revisa el repositorio!',
		'CONTRIBUTE-8': 'Esto fue hecho usando tecnologías interesantes y siempre hay más para hacer.',
		'CONTRIBUTE-9': '¿Encontraste un error o un bug?',
		'CONTRIBUTE-10': '¡Reportalo aquí!',
		'CONTRIBUTE-11': 'Así lo podemos arreglar para todos.',
		'CONTRIBUTE-12': '¿Puedes traduducir esta App a tu idioma?',
		'CONTRIBUTE-13': 'Tan sólo mándanos un email,',
		'CONTRIBUTE-14': 'y con todo gusto aceptaremos tu ayuda.',
		'CONTRIBUTE-15': '¿Querés donar dinero?',
		'CONTRIBUTE-16': 'No es necesario, tan sólo',
		'CONTRIBUTE-17': 'compártelo con tus amigos',
		'CONTRIBUTE-18': '¿Por qúe me debería de preocupar?',
		'CONTRIBUTE-19': 'Bueno... Nadie te está forzando.',
		'CONTRIBUTE-20': 'Pero esta App es distribuida gratuitamente sin ninguna publicidad, tan sólo por el amor ' +
		'al juego. Fue realizada usando el mismo sistema abierto del juego y tecnologías libres. ' +
		'Cada pequeña contribución ayuda demasiado, ¡Así que no tengas miedo de dejar la tuya!',

		'LANGUAGE': 'Idioma',

		'SLASHING-WEAPON': 'Arma cortante',
		'PIERCING-WEAPON': 'Arma perforante',
		'BLUDGEONING-WEAPON': 'Arma contundente',
		'MAGIC-ATTACK': 'Ataque mágico',
		'MELEE-ATTACK': 'Ataque cuerpo a cuerpo',
		'RANGED-ATTACK': 'Ataque de rango',
		'NATURAL-ATTACK': 'Ataque natural'
	});

	$translateProvider.preferredLanguage(window.localStorage['language'] || 'en');
	$translateProvider.fallbackLanguage('en');
}]);