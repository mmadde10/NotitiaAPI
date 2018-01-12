'use strict';
let ampDocumentHeadSchema = require('../models/amp/ampHead/ampHeadModel').ampDocumentHeadSchema;
let ampBodySchema =         require('../models/amp/ampBody/ampBodyModel').ampBodySchema;
let ampImgSchema =          require('../models/amp/ampBody/ampImageModel').ampImgSchema;
let ampParagraphSchema =      require('../models/amp/ampBody/ampParagraphModel').ampParagraphSchema;
let ampDocumentSchema =     require('../models/amp/ampDocumentModel').ampDocumentSchema;
let queries =               require('../services/ampControllerQueries');
let ampHeadDefaultsSchema = require('../models/amp/ampHead/ampHeadDefaultsModel').ampHeadDefaultsSchema;
let mongoose =              require('mongoose');


let AmpHead =    mongoose.model('Head', ampDocumentHeadSchema);
let AmpBody =    mongoose.model('Body', ampBodySchema);
let ampImg  =    mongoose.model('Image', ampImgSchema);
let ampParagraph = mongoose.model('Paragraph', ampParagraphSchema);
let HeadDefaults =   mongoose.model('headDefaults', ampHeadDefaultsSchema);
let document =   mongoose.model('Document',ampDocumentSchema);


function getModels(){
    let models = {
        Head: AmpHead,
        Body: AmpBody,
        Img: ampImg,
        Defaults: HeadDefaults,
        Document: document,
        Paragraph:ampParagraph
    };
    return models;
}
function buildHead(userId,headData){
    let ampDefaults = buildHeadDefaults();
    let ampsHead = new AmpHead({
        ampStyle: headData.style,
        date: headData.date,
        canonicalLink: headData.canonical,
        ampHeadDefaults: ampDefaults._id
    });
    ampsHead.save(function(error,saved) {
        if(error){
            console.log(error,'error is found\n');
        }
        else{
            console.log(saved,`Saved to the DB`)
            return;
        }
    });
}
function buildHeadDefaults(){
    let ampDefaults = new HeadDefaults({
        _id: new mongoose.Types.ObjectId()
    });
    ampDefaults.save(function(error){
        if(error){
            console.log(error,'error is found\n');
            return error;
        }
        else{
            return
        }
    });
    return ampDefaults;
}
/*
BUILD BODY
*/
function buildBody(BodyData,images,ampParagraphs){
        let ampBody = new AmpBody({
            ampTitle: bodyData.title,
            ampAuthor: bodyData.author,
            imgs: images.imgId,
            ampParagraphs: ampParagraphs.ParagraphId
        });
    ampBody.save(function(error,cb){
        if(error){
            res.send(error);
        }
        else{
        res.json({'message':'Body Saved'});
      }  
    });     
}   
function buildParagraph(paragraphData,res){
    let ampsParagraph = new ampParagraph({
        _id: new mongoose.Types.ObjectId(),
        header: paragraphData.header,
        paragraph: paragraphData.paragraph
    });
    ampsParagraph.save(function(error,cb){
        if(error){
            res.send(error);
        }
      else{
            res.json({'message':'Paragraph Saved'});
      }  
    });
}
function buildImage(imgData,res){
    let ampsImage = new ampImg({
        name:  imgData.name,
        src:   imgData.src,
        width: imgData.width,
        height:imgData.height,
        layout:imgData.layout  
    });
    ampsImage.save(function(error,cb){
        if(error){
            res.send(error);
        }
        else{
            res.json({'message':'Image Saved'});
        }
      });
    
}
function buildAMPDocument(body,head,responseObject){
    let ampDocument = new document ({
        title: responseObject.title,
        ampHead: head.Id,
        ampBody: body.Id
    });
    ampDocument.save(function(error){
        //populate amp document with body and head
    });
    return ampDocument
}

module.exports = {buildHead,buildBody,buildImage,buildParagraph,buildAMPDocument,buildHeadDefaults,getModels}