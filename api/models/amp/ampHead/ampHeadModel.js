var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ampDocumentHeadSchema = new Schema({
    ampHeadDefaults: {type: Schema.Types.ObjectId, ref:'ampHeadDefaults'},
    date:{ 
        type: Date, 
        default: Date.now 
    },
    headId: Schema.Types.ObjectId,
    ampStyle: String,
    canonicalLink: {type: String, required: true}
});


module.exports = {ampDocumentHeadSchema};