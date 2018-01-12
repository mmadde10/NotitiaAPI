var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FBIASocialSchema = new Schema({
    figtypeType: {
        type: String,
        default: 'op-social'
    },
    iframeSRC: String
});
module.exports = FBIASocialSchema;