var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var consign    = require('consign');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


consign({ cwd: './api' })
    .include(`healthcheck.js`)
    .then(`routes`)
    .then(`models`)
    .then(`controllers`)
    .into(app);


module.exports = app;