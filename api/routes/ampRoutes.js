'use strict';
module.exports = function(app) {
    var ampDocument = require('../controllers/ampController');

    //AMP Routes
    app.route('/users/:userId/amp')
        .get(ampDocument.list_all_amp_documents)
        .post(ampDocument.create_amp_document);

    app.route('/users/:userId/amp/:ampId')
        .get(ampDocument.read_amp_document)
        .put(ampDocument.update_amp_document)
        .delete(ampDocument.delete_amp_document);

    app.route('/users/:userId/amp/head/')
        .get(ampDocument.list_all_amp_heads)
        .post(ampDocument.create_amp_heads);

    app.route('/users/:userId/amp/body/')
        .get(ampDocument.list_all_amp_body)  
        .post(ampDocument.create_amp_body);

    app.route('/users/:userId/amp/head/:ampHeadId')
        .get(ampDocument.read_amp_head)
        .put(ampDocument.update_amp_head)
        .delete(ampDocument.delete_amp_head);

    app.route('/users/:userId/amp/body/:ampBodyId')
        .get(ampDocument.read_amp_body)
        .put(ampDocument.update_amp_body)
        .delete(ampDocument.delete_amp_body);
};
