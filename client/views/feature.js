var Collection = require('ampersand-collection');
var View = require('ampersand-view');
var CollectionRenderer = require('ampersand-collection-view');
var FeatureLabelView = require('./featureLabel');
var FeatureLabelModel = require('../models/featureLabel');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.includes.feature,
    bindings: {
        'model.title': '[data-hook~=title]',
        'model.content': '[data-hook~=content]'
    },
    subviews: {
        badges: {
            hook: 'feature-label-list',
            waitFor: 'model.badges',
            prepareView: function (el) {
                return new CollectionRenderer({
                    el: el,
                    collection: new Collection(this.model.badges, { model: FeatureLabelModel}),
                    view: FeatureLabelView,
                    parent: this,
                    viewOptions: {
                        parent: this
                    }
                });
            }
        }
    }
});
