var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ampParagraphSchema = new Schema({
    textId: Schema.Types.ObjectId,
    header: String,
    paragraph: String
});

module.exports = {ampParagraphSchema};