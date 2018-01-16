'use strict';
let ampDocumentHeadSchema = require('../ampHead/ampHeadModel').ampDocumentHeadSchema;
let ampBodySchema =         require('../ampBody/ampBodyModel').ampBodySchema;
let ampImgSchema =          require('../ampBody/ampImageModel').ampImgSchema;
let ampParagraphSchema =    require('../ampBody/ampParagraphModel').ampParagraphSchema;
let ampDocumentSchema =     require('../ampDocumentModel').ampDocumentSchema;
let ampHeadDefaultsSchema = require('../ampHead/ampHeadDefaultsModel').ampHeadDefaultsSchema;

let mongoose =              require('mongoose');

let AMPModels = {
    Head: mongoose.model('Head', ampDocumentHeadSchema),
    Body: mongoose.model('Body', ampBodySchema),
    Img:  mongoose.model('Image', ampImgSchema),
    Paragraph: mongoose.model('Paragraph', ampParagraphSchema),
    headDefaults: mongoose.model('HeadDefaults', ampHeadDefaultsSchema),
    Document: mongoose.model('Document',ampDocumentSchema)
}
module.exports = AMPModels;
