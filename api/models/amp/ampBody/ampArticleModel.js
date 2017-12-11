var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ampArticleSchema = new Schema({
    textId: Schema.Types.ObjectId,
    header: String,
    paragraph: String
});

module.exports = {ampArticleSchema};