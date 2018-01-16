'use strict';
const functions = require('firebase-functions');

exports.app = functions.https.onRequest(function(app) {               // define our app using express
    var notitiaUser = require('../controllers/notitiaController');

    app.get('/', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });   
    });
    app.route('/user')
        .post(notitiaUser.Auth_User);
    });