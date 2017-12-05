var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ampDocumentHeadSchema = new Schema({
    headDefaults: {
        charset:{
            type: String, 
            default:'<meta charset="utf-8">'
        },
        ampCDN:{
            type: String, 
            default:'<script async src="https://cdn.ampproject.org/v0.js"></script>'
        },
        viewPort:{
            type:String,
             default:'<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">'
            },
        ampBoiler:{
            type: String,
            default:'<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>'
        },
        canonicalLink: String
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    headId: Schema.Types.ObjectId,
    ampSocialShareHeadTag: {
        type: String, 
        default:'<script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>'
    },
    ampiframeHeadTag: {
        type: String, 
        default:'<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>'
    },
    ampCarouselHeadTag: {
        type: String, 
        default:'<script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>'
    },
    ampListHeadTag: {
        type: String, 
        default:'<script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>'
    },
    ampMustacheHeadTag: {
       type: String,
        default:'<script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.1.js"></script>'
    },
    ampAnalyticsHeadTag: {
        type: String, 
        default:'<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>'
    },        
    ampAdHeadTag: {
        type: String, 
        default:'<script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>'
    }, 
    HeadComponentBooleans:{
        isAmpAd: Boolean,
        isYoutube: Boolean, 
        isAmpMustache:Boolean,
        isAmpAnalytics: Boolean, 
        isAmpList:Boolean,
        isAmpCarousel:Boolean,
        isAmpiframe: Boolean,
        isAmpsocialShare: Boolean
    },
    ampStyle: String,
    ampDocumentBodyID: {type: Schema.Types.ObjectId, ref: 'Body'},
    isHead: Boolean
});

module.exports = mongoose.model('ampHead', ampDocumentHeadSchema);