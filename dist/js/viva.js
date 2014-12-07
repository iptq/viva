// test for jquery
(function() {
	try {
		if (jQuery) {
			// great!
		}
	} catch (e) {
		// fuck you
		console.log("jQuery was not found! Get it now at http://jquery.com!");
	}
})();

$(document).ready(function() {
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
});