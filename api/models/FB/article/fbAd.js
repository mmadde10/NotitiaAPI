var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FBIAAdSchema = new Schema({
    figType: {
        type: String,
        default: 'op-ad'
    },
   adSRC: String
    
});
module.exports = FBIAAdSchema;