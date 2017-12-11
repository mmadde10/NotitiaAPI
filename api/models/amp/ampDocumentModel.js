var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ampDocumentSchema = new Schema({
    ampDocumentId: {type: Schema.Types.ObjectId},
    user: {type: Schema.Types.ObjectId, ref: 'User' },
    ampBody: {type: Schema.Types.ObjectId, ref: 'Body' },
    ampHead: {type: Schema.Types.ObjectId, ref: 'Head' },
});
module.exports = {ampDocument}