var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FBIAHeadSchema = new Schema({
    meta: {
        type: String,
        default: '<meta charset="utf-8">'
    },
    canonical: String,
    markupVersion: {
        type:String,
        default: "op:markup_version"
    },
    markupcontent: {
        type:String,
        default: "v1.0"
    },
    title: String,
    articleStyle: String,
    StyleContent: String
});
module.exports = {FBIAHeadSchema};