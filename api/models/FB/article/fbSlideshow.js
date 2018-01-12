var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FBIASlideshowSchema = new Schema({
    figtypeType: {
        type: String,
        default: 'op-slideshow'
    },
    image: { type: Schema.Types.ObjectId, ref: 'Image'},

});
module.exports = FBIASlideshowSchema;