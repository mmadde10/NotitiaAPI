var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FBIAHeaderSchema = new Schema({
    title: String,
    subtitle: String,
    coverImage: { type: Schema.Types.ObjectId, ref: 'Image'},
    publishedTime: {
        type: Date,
        default: Date.now
    },
    modifiedTime: {
        type: Date,
        default: Date.now
    },
    kicker: String,
    author: String
});
module.exports = FBIAHeaderSchema;