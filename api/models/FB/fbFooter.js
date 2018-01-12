var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FBIAFooterSchema = new Schema({
    credit: String,
    copyright: String
});
module.exports = FBIAFooterSchema;