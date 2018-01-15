'use strict';
module.exports = function(app) {
    var fbDocument = require('../controllers/fbController');
    var authenticated = require('./middleware/isAuth');

    //fb Routes
    app.route('/users/:userId/fb/document')
        .get(authenticated.isAuthenitcated,fbDocument.list_all_fb_documents)
        .post(authenticated.isAuthenitcated,fbDocument.create_fb_document);

    app.route('/users/:userId/fb/document/:fbDocumentId')
        .get(authenticated.isAuthenitcated,fbDocument.read_fb_document)
        .put(authenticated.isAuthenitcated,fbDocument.update_fb_document)
        .delete(authenticated.isAuthenitcated,fbDocument.delete_fb_document);

    app.route('/users/:userId/fb/head/')
        .get(authenticated.isAuthenitcated,fbDocument.list_all_fb_heads)
        .post(authenticated.isAuthenitcated,fbDocument.create_fb_heads);

    app.route('/users/:userId/fb/head/:fbHeadId')
        .get(authenticated.isAuthenitcated,fbDocument.read_fb_head)
        .put(authenticated.isAuthenitcated,fbDocument.update_fb_head)
        .delete(authenticated.isAuthenitcated,fbDocument.delete_fb_head);

    app.route('/users/:userId/fb/body/')
        .get(authenticated.isAuthenitcated,fbDocument.list_all_fb_body)  
        .post(authenticated.isAuthenitcated,fbDocument.create_fb_body);

    app.route('/users/:userId/fb/body/:fbBodyId')
        .get(authenticated.isAuthenitcated,fbDocument.read_fb_body)
        .put(authenticated.isAuthenitcated,fbDocument.update_fb_body)
        .delete(authenticated.isAuthenitcated,fbDocument.delete_fb_body);

};