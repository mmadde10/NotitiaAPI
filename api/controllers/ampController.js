'use strict';
/*
var ampHeadModel = require('../models/amp/ampHeadModel');
var ampBodyModel = require('../models/amp/ampBodyModel');
*/
var mongoose = require('mongoose');
var ampHelper = require('../services/ampControllerHelper');

//AMP Document read
exports.list_all_amp_documents = function(req, res){
    let ampDocuments = ampHelper.getAllAmpDocs(req.params.userId);
    res.send(ampDocuments);
};
//CRUD AMP DOCUMENT
exports.create_amp_document = function(req, res){
    console.log(req.query);
    res.json({message:'NOT IMPLEMENTED:create_amp_document'});
};
exports.read_amp_document = function(req, res){
    console.log(req.query);
    res.json({message:'NOT IMPLEMENTED:read_amp_documents'});
}
exports.update_amp_document = function(req, res){
    res.json({message:'NOT IMPLEMENTED:update_amp_document'});
}
exports.delete_amp_document = function(req, res){
    res.json({message:'NOT IMPLEMENTED:delte_amp_document'});
} 

//AMP HEADS
exports.list_all_amp_heads = function(req, res){
    res.json({message:'NOT IMPLEMENTED:list_all_amp_heads'});
}
//CRUD HEADS
exports.create_amp_heads = function(req, res){
    let ampHead = ampHelper.buildHead(req.params.userId,req.query);
    console.log(ampHead);
    res.send(ampHead);
}
exports.read_amp_head = function(req, res){
    res.json({message:'NOT IMPLEMENTED:read_amp_head'});
}
exports.update_amp_head = function(req, res){
    res.json({message:'NOT IMPLEMENTED:update_amp_head'});
}
exports.delete_amp_head = function(req, res){
    res.json({message:'NOT IMPLEMENTED:delete_amp_head'});
}

//AMP Bodies
exports.list_all_amp_body = function(req, res){
    res.json({message:'NOT IMPLEMENTED:list_all_amp_body'});
}
//CRUD BODY
exports.create_amp_body = function(req, res){
    res.json({message:'NOT IMPLEMENTED:create_amp_heads'});
}
exports.read_amp_body = function(req, res){
    res.json({message:'NOT IMPLEMENTED:read_amp_head'});
}
exports.update_amp_body = function(req, res){
    res.json({message:'NOT IMPLEMENTED:update_amp_head'});
}
exports.delete_amp_body = function(req, res){
    res.json({message:'NOT IMPLEMENTED:delete_amp_head'});
}
