'use strict';
var mongoose = require('mongoose');

exports.create_user = function(req, res){
    console.log(req.query);
    res.json({message:'NOT IMPLEMENTED:create_user'});
};
exports.delete = function(req, res){
    console.log(req.query);
    res.json({message:'NOT IMPLEMENTED:delete_user'});
};