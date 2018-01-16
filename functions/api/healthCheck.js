'use strict';
const functions = require('firebase-functions');

exports.app = functions.https.onRequest(function(app){
    app.get('/healthcheck', (req, res) => {
        res.sendStatus(200);
    })
});