var Collection = require('ampersand-collection');
var View = require('ampersand-view');
var CollectionRenderer = require('ampersand-collection-view');
var FeatureLabelView = require('./featureLabel');
var FeatureLabelModel = require('../models/featureLabel');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.includes.featureLabel,
    bindings: {
        'model.label': {
            type: function (el, value, previousValue) {
                el.className = el.className + ' badge-' + value;
            },
            hook: 'feature-label'
        },
        'model.icon': {
            type: function (el, value, previousValue) {
                el.className = el.className + ' fa-' + value;
            },
            hook: 'feature-label-icon'
        },
        'model.hint': [
            {
                type: 'value',
                hook: 'feature-label-hint'
            },
            {
                type: 'attribute',
                name: 'title',
                hook: 'feature-label-tooltip'
            }
        ]
    },
});
