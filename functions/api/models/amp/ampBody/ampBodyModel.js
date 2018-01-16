var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ampBodySchema = new Schema({
    ampBodyId: Schema.Types.ObjectId,
    ampTitle: String,
    ampAuthor: String,
    ampArticles: [{type: Schema.Types.ObjectId, ref: 'ampArticle' }],
    imgs: [{type: Schema.Types.ObjectId, ref: 'img' }]
});
module.exports = {ampBodySchema};