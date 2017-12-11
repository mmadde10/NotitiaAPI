var body = {ampiframe:{
        iframeId: Schema.Types.ObjectId,
        title: String,
        src: String,
        width: [{
            type: Number, 
            default: 16
        }],
        height: [{
            type: Number, 
            default: 9
        }],
        layout: [{
            type: String, 
            default: 'responsive'
        }],
    },
    ampAd:{
        adId:Schema.Types.ObjectId,
        width:Number,
        height:Number,
        type:String,
        data_ax_size:String,
        data_aax_pubname: String,
        data_aax_src: Number
    },
    ampYoutube:{
        videoid:String,
        layout:[{
            type: String, 
            default: "responsive"
        }],
        width: Number,
        height: Number
    },
    ampVideo:[{
        videoID: Schema.Types.ObjectId,
        width:Number,
        height:Number,
        src: String,
    }],
    ampCarousel:{
        width: Number,
        height: Number,
        layout: [{
            type: String, 
            default: 'responsive'
        }],
        type:[{
            type: String,
             default: 'slides'
            }],
        ampImg: [{
            ampImgID: Schema.Types.ObjectId
        }]
    },
    ampAnalytics:{
        type: [{
            type: String, 
            default: "googleanalytics"
        }],
        analyticsScript:{
            "vars": [{
                "account": String
                }]
            },
            userID: {type: Schema.Types.ObjectId, ref: 'user'},
        }}



//head
var head = {
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
}
}