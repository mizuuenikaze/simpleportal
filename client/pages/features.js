var AmpersandCollection = require('ampersand-collection');
var PageView = require('./base');
var templates = require('../templates');
var FeatureView = require('../views/feature');
var Feature = require('../models/feature');
var _ = require('lodash');


module.exports = PageView.extend({
	pageTitle: 'muk Features',
	template: templates.pages.features,
	cmsId: 'e363fa5156a34be490f8be7c4507ad3f',
	events: {
	},
	bindings: _.extend({}, PageView.prototype.bindings, {
		'model.cms.page.a': {type: 'text', hook: 'outl-a'}
	}),
	render: function () {
		if (!this.collection) {
			this.fetchCollection();
		}
		this.renderWithTemplate();
		this.renderCollection(this.collection, FeatureView, this.queryByHook('feature-list'));
	},
	fetchCollection: function () {
		this.collection =  new AmpersandCollection(this.model.cms.page.b, {model: Feature});
	}
});
