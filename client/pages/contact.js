var PageView = require('./base');
var templates = require('../templates');


module.exports = PageView.extend({
    pageTitle: 'muk Contact',
    template: templates.pages.contact
});
