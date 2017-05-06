var Collection = require('ampersand-rest-collection');
var Feature = require('./feature');
var browser = require('detect-browser');


module.exports = Collection.extend({
    model: Feature,
    url: '/features',
	ajaxConfig: function () {
		console.log(browser.name);
		var useXDR = /IE/.test(browser.name);
		var headers = {};
		var xhrFieds = {withCredentials: false};

		if (app.me.token !== '') {
			headers.Authorization = 'Bearer ' + app.me.token;
			xhrFields.withCredentials = true;
		}

		return { useXDR: useXDR, headers: headers, xhrFields: xhrFields };
	},
	beforeSend: function (xhr) {
		console.log('Before send');
		console.log(JSON.stringify(xhr));
	},
	initialize: function () {
		console.log('Feature collection init.');
		console.log(url);
	}
});
