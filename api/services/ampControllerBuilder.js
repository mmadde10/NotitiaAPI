'use strict';
var ampDocumentHeadSchema = require('../models/amp/ampHeadModel').ampDocumentHeadSchema;
var ampBodySchema = require('../models/amp/ampBodyModel').ampBodySchema;
var ampImgSchema = require('../models/amp/ampImageModel').ampImgSchema;
var ampArticleSchema = require('../models/amp/ampArticleModel').ampArticleSchema;
var ampDocument =      require('../models/amp/ampDocumentModel').ampDocumentSchema;
var queries =          require('../services/ampControllerQueries');
var mongoose =         require('mongoose');


var AmpHead =    mongoose.model('Head', ampDocumentHeadSchema);
var AmpBody =    mongoose.model('Body', ampBodySchema);
var ampImg  =    mongoose.model('Image', ampImgSchema);
var ampArticle = mongoose.model('Article', ampArticleSchema);
var defaults =   mongoose.model('headDefaults', ampHeadDefaults);
var document =   mongoose.model('Document',ampDocumentSchema);



function buildHead(userId,headData,headDefaults){
    var ampHead = new AmpHead({
        ampStyle: headData.style,
        headDefaults: headDefaults.id,
        data: headData.date
    });
    ampHead.save(function(error) {
        assert.equal(error.errors['name'].message,
          'Path `name` is required.');
          //populate the head with head defaults
        return ampHead;
      });
      return ampHead;
}
function buildImage(imgData){
    var ampImage = new ampImg({
        name: imgData.name,
        src: imgData.src,
        width: imgData.width,
        height:imgData.height,
        layout:imgData.layout  
    });
    ampImage.save(function(error) {
        assert.equal(error.errors['name'].message,
          'Path `name` is required.');
        return ampImage;
      });
      return ampImage;
}
function buildBody(BodyData,image,ampArticle){
    var ampBody = {
        ampTitle: bodyData.title,
        ampAuthor: bodyData.author,
        img: image.imgId,
        article: ampArticle.articleId
    }
    ampBody.save(function(error) {
        assert.equal(error.errors['name'].message,
          'Path `name` is required.');
          //populate body with image and article
        return ampBody;
      });
      return ampBody;
}

function buildArticle(articleData){
    var ampArticle = new ampArticle({
        header: articleData.header,
        paragraph: articleData.paragraph
    });
    ampArticle.save(function(error){
        assert.equal(error.errors['name'].message,
        'Path `name` is required.');
      return ampArticle;
    });
    return ampArticle;
}

function buildAMPDocument(body,head,responseObject){
    var ampDocument = new document ({
        title: responseObject.title,
        ampHead: head.Id,
        ampBody: body.Id
    });
    ampDocument.save(function(error){
        assert.equal(error.errors['name'].message,
        'Path `name` is required.');
        //populate amp document with body and head
        var populatedDocument = queries.populate(ampDocument);
      return populatedDocument;
    });
    return ampDocument
}

module.exports = {buildHead,buildBody,buildImage,buildArticle,buildAMPDocument}