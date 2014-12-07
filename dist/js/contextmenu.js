// contextmenu.js
(function() {
	var contextmenu = function() {

	};

	if (document.addEventListener) {
		document.addEventListener('contextmenu', function(e) {
			contextmenu();
			e.preventDefault();
		}, false);
	} else {
		document.attachEvent('oncontextmenu', function() {
			contextmenu();
			window.event.returnValue = false;
		});
	}
})();