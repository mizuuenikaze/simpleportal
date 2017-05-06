var Collection = require('ampersand-rest-collection');
var Feature = require('./feature');


module.exports = Collection.extend({
    model: Feature,
    url: '/features'
});
