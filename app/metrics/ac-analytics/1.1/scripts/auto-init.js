/* ---- BUILT FILE. DO NOT MODIFY THIS DIRECTLY. ---- */
(function() {
	'use strict';

	var PAGE_DATA_EXT_JSON_ID = 'analytics-page-view-data';
	var ac_analytics          = require('ac-analytics');
	var listenMethod          = document.addEventListener ? 'addEventListener' : 'attachEvent';
	var prefix                = document.addEventListener ? '' : 'on';
	var options = {};
	var data;

	document[listenMethod](prefix + 'readystatechange', function () {
		if (document.readyState === 'complete') {
			data = document.getElementById(PAGE_DATA_EXT_JSON_ID);

			if (data) {
				try {
					data = data.innerHTML;
					data = JSON.parse(data);
					options.page = {
						data: data
					};
				} catch (e) {
					// do nothing
				}
			}

			ac_analytics.createBasicObserverSuite(options);
		}
	});
}());