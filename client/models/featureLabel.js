var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        label: ['string', true, 'success'],
        icon: ['string', true, 'ok'],
        hint: ['string', true, '']
    }
});
