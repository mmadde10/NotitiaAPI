'use strict';
var ampDocumentHeadSchema = require('../models/amp/ampHead/ampHeadModel').ampDocumentHeadSchema;
var ampBodySchema =         require('../models/amp/ampBody/ampBodyModel').ampBodySchema;
var ampImgSchema =          require('../models/amp/ampBody/ampImageModel').ampImgSchema;
var ampArticleSchema =      require('../models/amp/ampBody/ampArticleModel').ampArticleSchema;
var ampDocumentSchema =     require('../models/amp/ampDocumentModel').ampDocumentSchema;
var queries =               require('../services/ampControllerQueries');
var ampHeadDefaultsSchema = require('../models/amp/ampHead/ampHeadDefaultsModel').ampHeadDefaultsSchema;
var mongoose =              require('mongoose');


var AmpHead =    mongoose.model('Head', ampDocumentHeadSchema);
var AmpBody =    mongoose.model('Body', ampBodySchema);
var ampImg  =    mongoose.model('Image', ampImgSchema);
var ampArticle = mongoose.model('Article', ampArticleSchema);
var HeadDefaults =   mongoose.model('headDefaults', ampHeadDefaultsSchema);
var document =   mongoose.model('Document',ampDocumentSchema);


function buildHead(userId,headData){

    var ampDefaults = buildHeadDefaults();


    var ampsHead = new AmpHead({
        ampStyle: headData.style,
        date: headData.date,
        canonicalLink: headData.canonical,
        ampHeadDefaults: ampDefaults._id
    });


    ampsHead.save(function(error,saved) {
        if(error){
            console.log(error,'error is found\n');
            return error;
        }
        else{
            return saved;
        }
    });
    return AmpHead;
}
















    
function buildBody(BodyData,image,ampArticle){

    var ampBody = new AmpBody({
        ampTitle: bodyData.title,
        ampAuthor: bodyData.author,
        img: image.imgId,
        article: ampArticle.articleId
    });
    ampBody.save(function(error) {
          //populate body with image and article
          //var populatedHead = queries.populate(ampHead);
        return ampBody;
      });
      return ampBody;
}
function buildHeadDefaults(){
    var ampDefaults = new HeadDefaults({
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
    
function buildArticle(articleData){
    var ampArticle = new ampArticle({
        header: articleData.header,
        paragraph: articleData.paragraph
    });
    ampArticle.save(function(error){
      return ampArticle;
    });
    return ampArticle;
}
function buildImage(imgData){
    var ampImage = new ampImg({
        name:  imgData.name,
        src:   imgData.src,
        width: imgData.width,
        height:imgData.height,
        layout:imgData.layout  
    });
    ampImage.save(function(error){
        return ampImage;
      });
      return ampImage;
}

function buildAMPDocument(body,head,responseObject){
    var ampDocument = new document ({
        title: responseObject.title,
        ampHead: head.Id,
        ampBody: body.Id
    });
    ampDocument.save(function(error){
        //populate amp document with body and head
        var populatedDocument = queries.populate(ampDocument);
      return populatedDocument;
    });
    return ampDocument
}

module.exports = {buildHead,buildBody,buildImage,buildArticle,buildAMPDocument,buildHeadDefaults}