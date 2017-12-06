var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ampImgSchema = new Schema({
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
});
module.exports = mongoose.model('img', ampImgSchema);