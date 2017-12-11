var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ampBodySchema = new Schema({
    ampBodyId: Schema.Types.ObjectId,
    ampTitle: String,
    ampAuthor: String,
    ampArticle: {type: Schema.Types.ObjectId, ref: 'ampArticle' },
    img: {type: Schema.Types.ObjectId, ref: 'img' }
});
module.exports = {ampBodySchema};