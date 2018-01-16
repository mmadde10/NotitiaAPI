var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FBIAImageSchema = new Schema({
    imageURL: String,
    figCaption: String
});
module.exports = FBIAImageSchema;