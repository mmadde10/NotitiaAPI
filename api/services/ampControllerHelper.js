'use strict';
var ampDocumentHeadSchema = require('../models/amp/ampHeadModel').ampDocumentHeadSchema;
var ampBodySchema = require('../models/amp/ampBodyModel').ampBodySchema;
var mongoose = require('mongoose');


var AmpHead = mongoose.model('Head', ampDocumentHeadSchema);
var AmpBody = mongoose.model('Body', ampBodySchema);

function manageInputData(data){
   

    return data;

};

function combineAMPComponents(){

    return null;

}

function findDataType(formData){
    
    if(formData.isBody === true){
        return buildBody(formData);
    }
    else if(formData.isHead === true){
        return buildHead(formData);
    }
    else{
        console.log('Error I guess');
    }
}
function getAllAmpDocs(userId){
    console.log(userId);

    if(userId != false){
        let head = AmpHead.find({'userID': userId }, function(err,AmpHead){
            if (err) return handleError(err);
            return AmpHead;
        });
        let body = AmpBody.where({ 'userID': userId }, function(err,AmpBody){
            if (err) return handleError(err);
           return AmpBody;
       });
       console.log('l',head);
       //console.log('s',body);
       //return head + body;
    }
    else{
        return "not Real USERID"
    }
}




function buildBody(BodyData){
    var ampBody = {
        ampTitle: bodyData.title,
        ampAuthor: bodyData.author,
        ampArticleText: bodyData.text,
        ampImg: {
            name: bodyData.img.name,
            src: bodyData.img.src,
            },
        ampiframe:{
            title: bodyData.iframe.title,
            src: bodyData.iframe.src,
            }
        }
        return ampBody;
    }

function buildHead(userId,headData){
    var ampHead = new AmpHead({
        ampStyle: headData.style,
        headDefaults: {
            charset: headData.charset,
            ampCDN: headData.cdn,
            viewPort: headData.viewPort,
            ampBoiler: headData.boiler,
            canonicalLink: headData.canonical 
        },
        data: headData.date
    });
    ampHead.save(function (err) {
        if (err) return handleError(err);
        console.log('saved!');
        return ampHead;
      });
      return ampHead;
}

/*
function addHeadBooleans(headData){
    var headBool =  {
        HeadComponentBooleans:{
            isAmpAd:headData.isAmpAd, 
            isYoutube: headData.youtube,
            isAmpMustache:headData.isAmpMustache,
            isAmpAnalytics: headData.isAmpAnalytics,
            isAmpList: headData.isAmpList,
            isAmpCarousel: headData.isAmpCarousel,
            isAmpiframe: headData.isAmpiframe,
            isAmpsocialShare: headData.isAmpsocialShare 
        }
    }
    
}
*/


module.exports = {combineAMPComponents,manageInputData,findDataType,getAllAmpDocs,buildHead}