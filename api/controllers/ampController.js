'use strict';
/*
var ampHeadModel = require('../models/amp/ampHeadModel');
var ampBodyModel = require('../models/amp/ampBodyModel');
*/
var mongoose = require('mongoose');
var ampHelper = require('../services/ampControllerBuilder');
var ampQuery = require('../services/ampControllerQueries');

/*


Amp Document


*/
exports.list_all_amp_documents = function(req, res){
    let ampDocuments = ampHelper.getAllAmpDocs(req.params.userId);
    res.send(ampDocuments);
};
//CRUD AMP DOCUMENT
exports.create_amp_document = function(req, res){
    let ampDocuments = ampHelper.createAmpDocument(req.params.userId);
    console.log(req.query);
    res.json({message:'NOT IMPLEMENTED:create_amp_document'});
};
exports.read_amp_document = function(req, res){
    console.log(req.query);
    res.json({message:'NOT IMPLEMENTED:read_amp_documsssssents'});
}
exports.update_amp_document = function(req, res){
    res.json({message:'NOT IMPLEMENTED:update_amp_document'});
}
exports.delete_amp_document = function(req, res){
    res.json({message:'NOT IMPLEMENTED:delte_amp_document'});
} 
/*


Heads


*/
exports.list_all_amp_heads = function(req, res){
    let Model = ampHelper.getModels();
    Model.Head.find({}).populate('ampHeadDefaults').lean().exec(function (err, callback){
        if (err){
            res.send(err);
        }
        else{
            res.json(callback);
        }
    });
}
exports.create_amp_heads = function(req, res){
    ampHelper.buildHead(req.params.userId,req.query);
}
exports.read_amp_head = function(req, res){
    //Req must Contain Head ID
    let Model = ampHelper.getModels();
    Model.Head.find({_id:req.params.ampHeadId}).limit(1).populate('ampHeadDefaults').lean().exec(function (err, callback){
        if (err){
            res.send(err);
        }
        else{
            res.json(callback);
        }
    });

}
exports.update_amp_head = function(req, res){
    let Model = ampHelper.getModels();
    Model.Head.findOneAndUpdate({_id:req.params.ampHeadId},
        {ampStyle:req.query.ampStyle,
        canonicalLink:req.query.canonicalLink},function(err,callback){
            if(err){
                res.send(err)
            }
            else{
                res.json({message:`Head ${req.params.ampHeadId}, has been updated`});
            }
        });
        
}
exports.delete_amp_head = function(req, res){

    let Model = ampHelper.getModels();
    Model.Head.remove({_id:req.params.headId},function(err,callback){
        if(err){
            res.send(err); 
        }
        else{
            res.json({message:'Head deleted from DB'});
        }
    });
}
/*


Body


*/
exports.list_all_amp_body = function(req, res){
    let Model = ampHelper.getModels();
    Model.Body.find({}).populate('img').populate('ampArticle').lean().exec(function (err, callback){
        if (err){
            res.send(err);
        }
        else{
            res.json(callback);
        }
    });
}

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
/*


images


*/
exports.list_all_amp_img = function(req, res){
    let Model = ampHelper.getModels();
    Model.Img.find().exec(function (err, callback){
        if (err){
            console.log("No Success");
            res.send(err);
        }
        else{
            console.log("Success");
            res.json(callback);
        }
    });
}
exports.create_amp_img = function(req, res){
    ampHelper.buildImage(req.query,res);
}
exports.read_amp_img = function(req, res){
    let Model = ampHelper.getModels();
    Model.Img.find({_id:req.params.ampImgId}).exec(function(err,callback){
        if (err){
            res.send(err);
        }
        else{
            res.json(callback);
        }
    });
}
exports.update_amp_img = function(req, res){
    let Model = ampHelper.getModels();
    Model.Img.findOneAndUpdate({_id:req.params.imgId},
        {name:req.query.name,
            src:req.query.src},function(err,callback){
            if(err){
                res.send(err)
            }
            else{
                 res.json({message:`Image ${req.query.imgId}, has been updated`});
            }
        });
}
exports.delete_amp_img = function(req, res){
    let Model = ampHelper.getModels();
    Model.Img.remove({_id:req.params.ampImgId},function(err,callback){
        if(err){
            res.send(err); 
        }
        else{
            res.json({message:'Head deleted from DB'});
        }
    });
}
/*

Article

*/
exports.create_amp_article = function (req,res){
    ampHelper.buildArticle(req.query,res);
    res.json({message:'NOT IMPLEMENTED:create_amp_arti'});
}
exports.read_amp_article = function (req,res){
    res.json({message:'NOT IMPLEMENTED:read_amp_article'});
}
exports.update_amp_article = function (req,res){
    res.json({message:'NOT IMPLEMENTED:update_amp_arti'});
}
exports.delete_amp_article = function (req,res){
    res.json({message:'NOT IMPLEMENTED:delete_amp_article'});
}
exports.list_all_amp_article = function (req,res){
    res.json({message:'NOT IMPLEMENTED:list_all_amp_article'});
}


