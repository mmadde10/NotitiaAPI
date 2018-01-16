'use strict';
var mongoose = require('mongoose');
var ampHelper = require('../services/ampControllerBuilder');
var ampQuery = require('../services/ampControllerQueries');
var ampModels = require('../models/amp/schema/ampSchemas');

const Model = ampModels;
/*


Amp Document


*/
exports.list_all_amp_documents = function(req, res){
    Model.Document.find({}).populate('ampHeadDefaults').lean().exec(function (err, callback){
        if (err){
            res.send(err);
        }
        else{
            res.json(callback);
        }
    });
    res.send(ampDocuments);
};
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
    Model.Body.find({}).populate('img').populate('ampParagraph').lean().exec(function (err, callback){
        if (err){
            res.send(err);
        }
        else{
            res.json(callback);
        }
    });
}
exports.create_amp_body = function(req, res){
    ampHelper.buildBody(req.query,res);
}
exports.read_amp_body = function(req, res){
    Model.Body.find({_id:req.params.ampBodyId}).populate('img').populate('ampParagraph').lean().exec(function (err, callback){
        if (err){
            res.send(err);
        }
        else{
            res.json(callback);
        }
    });
}
exports.update_amp_body = function(req, res){
    if(req.query.ampImgId === true && req.query.ampParagraphId === undefined){
        Model.findOneAndUpdate({_id:req.params.ampBodyId}, {imgs: req.query.ampImgId}).exec(function (err, callback){
            if (err){
                res.send(err);
            }
            else{
                res.json(callback);
            }
        });
    }
    if(req.query.ampImgId === undefined && req.query.ampParagraphId === true){
        Model.findOneAndUpdate({_id:req.params.ampBodyId}, {paragraph: req.query.ampParagraphId}).exec(function(err,callback){
            if(err){
                res.send(err);
            }
            else{
                res.json(callback);
            }
        });
    }
    else{
        Model.findOneAndUpdate({_id:req.params.ampBodyId}, {paragraph: req.query.ampParagraphId}).exec(function(err,callback){
            if(err){
                res.send(err);
            }
            else{
                res.json(callback);
            }
        });
    }
}
exports.delete_amp_body = function(req, res){
    Model.Head.remove({_id:req.params.bodyId},function(err,callback){
        if(err){
            res.send(err); 
        }
        else{
            res.json({message:'Body deleted from DB'});
        }
    });
}
/*


images


*/
exports.list_all_amp_img = function(req, res){
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
    Model.Img.remove({_id:req.params.ampImgId},function(err,callback){
        if(err){
            res.send(err); 
        }
        else{
            res.json({message:'Img deleted from DB'});
        }
    });
}
/*

Paragraph

*/
exports.create_amp_Paragraph = function (req,res){
    ampHelper.buildParagraph(req.query,res);
}
exports.read_amp_Paragraph = function (req,res){
    Model.Paragraph.find({_id:req.params.ParagraphId}).exec(function(err,callback){
        if (err){
            res.send(err);
        }
        else{
            res.json(callback);
        }
    });
}
exports.update_amp_Paragraph = function (req,res){
    Model.Paragraph.findOneAndUpdate({_id:req.params.ParagraphId},
        {header:req.query.name,paragraph:req.query.src},function(err,callback){
            if(err){
                res.send(err)
            }
            else{
                 res.json({message:`Paragraph ${req.query.ParagraphId}, has been updated`});
            }
        });
}
exports.delete_amp_Paragraph = function (req,res){
    Model.Paragraph.remove({_id:req.params.ampImgId},function(err,callback){
        if(err){
            res.send(err); 
        }
        else{
            res.json({message:'Paragraph deleted from DB'});
        }
    });
}
exports.list_all_amp_Paragraph = function (req,res){
    Model.Paragraph.find().exec(function (err, callback){
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
