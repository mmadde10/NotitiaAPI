var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FBIAArticleSchema = new Schema({
    ad: { type: Schema.Types.ObjectId, ref: 'Ad'},
    interactivegraphic : { type: Schema.Types.ObjectId, ref: 'InteractiveGraphic'},
    slideshow : { type: Schema.Types.ObjectId, ref: 'Slideshow'},
    social: { type: Schema.Types.ObjectId, ref: 'Social'},
    video: { type: Schema.Types.ObjectId, ref: 'Video'},
    image: { type: Schema.Types.ObjectId, ref: 'Image'},
    bodyText: { type: Schema.Types.ObjectId, ref: 'BodyText'}
});
module.exports = FBIAArticleSchema;