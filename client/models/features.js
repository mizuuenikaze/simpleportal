var app = require('ampersand-app');
var Collection = require('ampersand-rest-collection');
var Feature = require('./feature');


module.exports = Collection.extend({
    model: Feature,
    url: app.apiBaseUrl + '/features'
});
