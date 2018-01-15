'use strict';
let fbAdSchema = require('./../article/fbAd');
let fbinteractiveGraphicSchema = require('./../article/fbInteractiveGraphic');
let fbRelatedArticlesSchema = require('./../article/fbRelatedArticles');
let fbSocialSchema = require('./../article/fbSocial');
let fbVideoSchema = require('./../article/fbVideo');

let fbArticleSchema = require('./../fbArticle');
let fbBodyTextSchema = require('./../fbBodyText');
let fbFooterSchema = require('./../fbFooter');
let fbHeaderSchema = require('./../fbHeader');
let fbHeadSchema = require('./../fbHeadModel');
let fbImageSchema = require('./../fbImage');
let fbInstantArticleSchema = require('./../fbInstantArticle');

let Models = {
    fbAd: mongoose.model('Ad', fbAdSchema),
    interactiveGraphic: mongoose.model('InteractiveGraphic', fbinteractiveGraphicSchema),
    relatedArticles: mongoose.model('RelatedArticles',fbRelatedArticlesSchema),
    social: mongoose.model('Social',fbSocialSchema),
    video: mongoose.model('Video',fbVideoSchema),
    article: mongoose.model('Article',fbArticleSchema),
    bodyText: mongoose.model('Text',fbBodyTextSchema),
    footer: mongoose.model('Footer',fbFooterSchema),
    header: mongoose.model('Header',fbHeaderSchema),
    head: mongoose.model('Head',fbHeadSchema),
    image: mongoose.model('Image',fbImageSchema),
    instantArticle: mongoose.model('InstantArticle',fbInstantArticleSchema)
};

module.exports = Models;

