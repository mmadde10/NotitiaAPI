var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var consign    = require('consign');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign({ cwd: './api' })
    .include(`healthcheck.js`)
    .then(`routes`)
    .then(`models`)
    .then(`controllers`)
    .into(app);


module.exports = app;