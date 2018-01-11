var PageView = require('./base');
var templates = require('../templates');


module.exports = PageView.extend({
    pageTitle: 'muk Contact',
    template: templates.pages.contact,
	cmsId: 'aa2b3c791124460b9efce47953dae52d',
	bindings: {
		'model.cms.page.a.a': {type: 'text', hook: 'outl-a.a'},
		'model.cms.page.a.b': {type: 'text', hook: 'outl-a.b'},
		'model.cms.page.b.a': {type: 'text', hook: 'outl-b.a'},
		'model.cms.page.b.b': [
			{type: function (el, value, previousValue) { el.href='mailto:' + value;}, hook: 'outl-b.b'},
			{type: 'text', hook: 'outl-b.b'}
		],
		'model.cms.page.c.a': {type: 'text', hook: 'outl-c.a'},
		'model.cms.page.c.b': {type: 'text', hook: 'outl-c.b'},
		'model.cms.page.d.a': {type: 'text', hook: 'outl-d.a'},
		'model.cms.page.d.b': [
			{type: 'attribute', hook: 'outl-d.b', name: 'href'},
			{type: 'text', hook: 'outl-d.b'}
		]
	}
});
