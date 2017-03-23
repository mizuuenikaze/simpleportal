var PageView = require('./base');
var templates = require('../templates');
var FeatureView = require('../views/feature');


module.exports = PageView.extend({
    pageTitle: 'Features',
    template: templates.pages.features,
    events: {
    },
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, FeatureView, this.queryByHook('feature-list'));
        if (!this.collection.length) {
            this.fetchCollection();
        }
    },
    fetchCollection: function () {
        this.collection.fetch();
        return false;
    }
});
