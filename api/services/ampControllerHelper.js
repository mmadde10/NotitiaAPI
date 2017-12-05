'use strict';
var mongoose = require('mongoose');


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

function buildHead(headData){
    var ampHead = {
        ampStyle: headData.style,
        headDefaults: {
            charset: headData.charset,
            ampCDN: headData.cdn,
            viewPort: headData.viewPort,
            ampBoiler: headData.boiler,
            canonicalLink: headData.canonical 
        },
        data: headData.date
    }
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


module.exports = {combineAMPComponents,manageInputData,findDataType}