var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FBIABodyTextSchema = new Schema({
    source: String,
    type: String
});
module.exports = FBIABodyTextSchema;