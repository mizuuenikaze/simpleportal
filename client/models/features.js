var Collection = require('ampersand-rest-collection');
var Feature = require('./feature');
var app = require('ampersand-app');

module.exports = Collection.extend({
    model: Feature,
    url: '/v1/features',
	ajaxConfig: function () {
		return app.configureAjax();
	},
	initialize: function (models, options) {
		this.url = options.url + this.url;
	}
});
