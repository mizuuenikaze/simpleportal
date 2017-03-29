var AmpersandModel = require('ampersand-model');
var crypto = require('crypto');

function stringHash(data) {
   return crypto.createHash(crypto.getHashes()[0]).update(data).digest('base64');
}

module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        title: ['string', true, ''],
        content: ['string', true, ''],
        badges: ['array', true, function () { return [];}]
    },
    session: {
        selected: ['boolean', true, false]
    },
    derived: {
        hash: {
            deps: ['title', 'content'],
            fn: function () {
                return stringHash(this.title + ' ' + this.content);
            }
        },
        editUrl: {
            deps: ['id'],
            fn: function () {
                return '/feature/' + this.id + '/edit';
            }
        },
        viewUrl: {
            deps: ['id'],
            fn: function () {
                return '/feature/' + this.id;
            }
        }
    }
});
