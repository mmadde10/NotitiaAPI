var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FBIAInteractiveGraphicSchema = new Schema({
    figType: {
        type: String,
        default: 'op-interactive'
    },
   interactiveSRC: String,
   height: Number,
    
});
module.exports = FBIAInteractiveGraphicSchema;