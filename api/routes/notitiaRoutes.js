'use strict';
module.exports = function(app) {
    var notitiaDocument = require('../controllers/notitiaController');

    app.route('/test', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });   
    });
};