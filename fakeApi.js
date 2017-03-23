var _ = require('lodash');


var features = [
    {
        id: 1,
        title: 'Portal',
        content: 'ampersand single page app with pug and stylus.',
    },
    {
        id: 2,
        title: 'Scheduler',
        content: 'some kind of scheduling thing.',
    }
];
var id = 3;

function get(id) {
    return _.findWhere(features, {id: parseInt(id + '', 10)});
}

exports.list = function (req, res) {
    res.send(features);
};

exports.add = function (req, res) {
    var feature = req.body;
    feature.id = id++;
    features.push(feature);
    res.status(201).send(feature);
};

exports.get = function (req, res) {
    var found = get(req.params.id);
    res.status(found ? 200 : 404);
    res.send(found);
};

exports.delete = function (req, res) {
    var found = get(req.params.id);
    if (found) features = _.without(features, found);
    res.status(found ? 200 : 404);
    res.send(found);
};

exports.update = function (req, res) {
    var found = get(req.params.id);
    if (found) _.extend(found, req.body);
    res.status(found ? 200 : 404);
    res.send(found);
};
