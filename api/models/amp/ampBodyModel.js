var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ampBodySchema = new Schema({
    ampBodyId: Schema.Types.ObjectId,
    ampTitle: String,
    ampAuthor: String,
    ampArticleText: String,
    isBody: Boolean,
    ampImg: {
        imgID: Schema.Types.ObjectId,
        name: String,
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
    ampiframe:{
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
            width:Number,
            height:Number,
            src: Number
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
            }
        }
});
module.exports = mongoose.model('Body', ampBodySchema);