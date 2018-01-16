var mongoose = require('mongoose');


function populate(Model,field){
    Model.find().sort('-createdAt').limit(1).populate(field).lean().exec(function (err, callback){
        if (err){
            console.log();
            console.log(err);
        }
        else{
            console.log(JSON.stringify(callback, null, "\t"));
            return callback;
        }
    });
}



module.exports = {populate};