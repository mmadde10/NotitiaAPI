'use strict';
let queries =   require('../services/ampControllerQueries');
let mongoose =  require('mongoose');
var ampModels = require('../models/amp/schema/ampSchemas');

const Model = ampModels;


function buildHead(userId,headData){
    let ampDefaults = buildHeadDefaults();
    let ampsHead = new Model.Head({
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
        let ampBody = new Model.Body({
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
    let ampsParagraph = new Model.Paragraph({
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
    let ampsImage = new Model.Img({
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
    let ampDocument = new Model.Document({
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