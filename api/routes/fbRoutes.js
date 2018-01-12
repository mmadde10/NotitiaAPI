'use strict';
module.exports = function(app) {
    var fbDocument = require('../controllers/fbController');

    //fb Routes
    app.route('/users/:userId/fb/document')
        .get(fbDocument.list_all_fb_documents)
        .post(fbDocument.create_fb_document);

    app.route('/users/:userId/fb/document/:fbDocumentId')
        .get(fbDocument.read_fb_document)
        .put(fbDocument.update_fb_document)
        .delete(fbDocument.delete_fb_document);

    app.route('/users/:userId/fb/head/')
        .get(fbDocument.list_all_fb_heads)
        .post(fbDocument.create_fb_heads);

    app.route('/users/:userId/fb/head/:fbHeadId')
        .get(fbDocument.read_fb_head)
        .put(fbDocument.update_fb_head)
        .delete(fbDocument.delete_fb_head);

    app.route('/users/:userId/fb/body/')
        .get(fbDocument.list_all_fb_body)  
        .post(fbDocument.create_fb_body);

    app.route('/users/:userId/fb/body/:fbBodyId')
        .get(fbDocument.read_fb_body)
        .put(fbDocument.update_fb_body)
        .delete(fbDocument.delete_fb_body);

};