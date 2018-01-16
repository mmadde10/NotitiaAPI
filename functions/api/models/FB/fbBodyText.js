var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FBIABodyTextSchema = new Schema({
    textType: {
        type: String,
        default: 'p'
    },
    text: String
});
module.exports = FBIABodyTextSchema;