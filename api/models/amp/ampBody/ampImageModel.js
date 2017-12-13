var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ampImgSchema = new Schema({
    ampImg: {
        imgId: Schema.Types.ObjectId,
        name: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        },
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
module.exports = {ampImgSchema};