var Collection = require('ampersand-rest-collection');
var Feature = require('./feature');
var app = require('ampersand-app');

module.exports = Collection.extend({
    model: Feature,
    url: '/features',
	ajaxConfig: function () {
		return app.configureAjax();
	},
	initialize: function (models, options) {
		this.url = options.url + this.url;
	}
});
