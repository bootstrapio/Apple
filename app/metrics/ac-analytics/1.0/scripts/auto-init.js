/* ---- BUILT FILE. DO NOT MODIFY THIS DIRECTLY. ---- */
(function() {
	'use strict';
	var ac_Analytics = require('ac-analytics');
	var listenMethod = document.addEventListener ? 'addEventListener' : 'attachEvent';
	var prefix = document.addEventListener ? '' : 'on';
	var options = {};
	var customPageData;

	function isJSON(str) {
		if (typeof str !== 'string') return false;
		str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
		str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
		str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
		return (/^[\],:{}\s]*$/).test(str);
	}

	document[listenMethod](prefix + 'readystatechange', function () {
		if (document.readyState === 'complete') {
			customPageData = document.documentElement.getAttribute('data-analytics-page-view');

			if (isJSON(customPageData)) {
				options.page = JSON.parse(customPageData);
			}

			ac_Analytics.createBasicObserverSuite(options);
		}
	});
}());
