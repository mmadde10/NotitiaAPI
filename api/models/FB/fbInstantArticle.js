var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var instantArticleSchema = new Schema({
    language: {
        type: String,
        default: 'en'
    },
    prefix: {
        type: String,
        default: 'op: http://media.facebook.com/op#'
    },
    head: { type: Schema.Types.ObjectId, ref: 'Head'},
    coverImage: { type: Schema.Types.ObjectId, ref: 'CoverImage'},
    header: { type: Schema.Types.ObjectId, ref: 'Header'},
    article: { type: Schema.Types.ObjectId, ref: 'Article'},
    footer: { type: Schema.Types.ObjectId, ref: 'Footer'}
});