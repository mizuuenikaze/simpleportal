var PageView = require('./base');
var templates = require('../templates');


module.exports = PageView.extend({
    pageTitle: 'muk',
    template: templates.pages.home
});
