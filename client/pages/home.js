var PageView = require('./base');
var templates = require('../templates');
var _ = require('lodash');


module.exports = PageView.extend({
	pageTitle: 'muk',
	template: templates.pages.home,
	cmsId: 'b1ec246ef3f7402cbb23cf635ff43df2',
	bindings: _.extend({}, PageView.prototype.bindings, {
		'model.cms.page.a.a': {type: 'text', hook: 'outl-a.a'},
		'model.cms.page.a.b': {type: 'text', hook: 'outl-a.b'},
		'model.cms.page.a.c': {type: 'text', hook: 'outl-a.c'},
		'model.cms.page.b.a': {type: 'text', hook: 'outl-b.a'},
		'model.cms.page.b.b': {type: 'text', hook: 'outl-b.b'},
		'model.cms.page.b.c[0]': {type: 'text', hook: 'outl-b.c.0'},
		'model.cms.page.b.c[1]': {type: 'text', hook: 'outl-b.c.1'},
		'model.cms.page.b.c[2]': {type: 'text', hook: 'outl-b.c.2'},
		'model.cms.page.b.c[3]': {type: 'text', hook: 'outl-b.c.3'}
	})
});
