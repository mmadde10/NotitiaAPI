'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var fbHelper = require('../services/fbControllerQueries');

exports.create_fb_document = function(req, res){
    let ampDocuments = fbHelper.createFBDocument(req.params.userId);
    console.log(req.query);
    res.json({message:'NOT IMPLEMENTED:create_fb_document'});
};