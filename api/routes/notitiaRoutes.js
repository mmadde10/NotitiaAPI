'use strict';
module.exports = function(app) {               // define our app using express
    var notitiaDocument = require('../controllers/notitiaController');

    app.get('/', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });   
    });
    app.get('/users', function(req, res) {
        res.json({ message: 'hooray! USERS HERE' });   
    });
};