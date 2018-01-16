var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FBIARelatedArticleSchema = new Schema({
    figType: {
        type: String,
        default: 'op-related-articles'
    },
   href: String,
   paragraph: String
});
module.exports = FBIARelatedArticleSchema;