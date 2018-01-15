'use strict';
let ampDocumentHeadSchema = require('../ampHead/ampHeadModel').ampDocumentHeadSchema;
let ampBodySchema =         require('../ampBody/ampBodyModel').ampBodySchema;
let ampImgSchema =          require('../ampBody/ampImageModel').ampImgSchema;
let ampParagraphSchema =    require('../ampBody/ampParagraphModel').ampParagraphSchema;
let ampDocumentSchema =     require('../ampDocumentModel').ampDocumentSchema;
let ampHeadDefaultsSchema = require('../ampHead/ampHeadDefaultsModel').ampHeadDefaultsSchema;

let mongoose =              require('mongoose');

let AMPModles = {
    ampHead: mongoose.model('Head', ampDocumentHeadSchema),
    ampBody: mongoose.model('Body', ampBodySchema),
    ampImg:  mongoose.model('Image', ampImgSchema),
    ampParagraph: mongoose.model('Paragraph', ampParagraphSchema),
    headDefaults: mongoose.model('HeadDefaults', ampHeadDefaultsSchema),
    ampDocument: mongoose.model('Document',ampDocumentSchema)
}
