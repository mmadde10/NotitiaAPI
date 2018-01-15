'use strict';
module.exports = function(app) {
    var ampDocument = require('../controllers/ampController');
    var authenticated = require('./middleware/isAuth');

    //AMP Routes
    app.route('/users/:userId/amp/document')
        .get(authenticated.isAuthenitcated,ampDocument.list_all_amp_documents)
        .post(authenticated.isAuthenitcated,ampDocument.create_amp_document);

    app.route('/users/:userId/amp/document/:ampDocumentId')
        .get(authenticated.isAuthenitcated,ampDocument.read_amp_document)
        .put(authenticated.isAuthenitcated,ampDocument.update_amp_document)
        .delete(authenticated.isAuthenitcated,ampDocument.delete_amp_document);

    app.route('/users/:userId/amp/head/')
        .get(authenticated.isAuthenitcated,ampDocument.list_all_amp_heads)
        .post(authenticated.isAuthenitcated,ampDocument.create_amp_heads);

    app.route('/users/:userId/amp/body/')
        .get(authenticated.isAuthenitcated,ampDocument.list_all_amp_body)  
        .post(authenticated.isAuthenitcated,ampDocument.create_amp_body);

    app.route('/users/:userId/amp/head/:ampHeadId')
        .get(authenticated.isAuthenitcated,ampDocument.read_amp_head)
        .put(authenticated.isAuthenitcated,ampDocument.update_amp_head)
        .delete(authenticated.isAuthenitcated,ampDocument.delete_amp_head);

    app.route('/users/:userId/amp/body/:ampBodyId')
        .get(authenticated.isAuthenitcated,ampDocument.read_amp_body)
        .put(authenticated.isAuthenitcated,ampDocument.update_amp_body)
        .delete(authenticated.isAuthenitcated,ampDocument.delete_amp_body);

    app.route('/users/:userId/amp/img/')
        .get(authenticated.isAuthenitcated,ampDocument.list_all_amp_img)  
        .post(authenticated.isAuthenitcated,ampDocument.create_amp_img);

    app.route('/users/:userId/amp/img/:ampImgId')
        .get(authenticated.isAuthenitcated,ampDocument.read_amp_img)
        .put(authenticated.isAuthenitcated,ampDocument.update_amp_img)
        .delete(authenticated.isAuthenitcated,ampDocument.delete_amp_img);


    app.route('/users/:userId/amp/paragraph/')
        .get(authenticated.isAuthenitcated,ampDocument.list_all_amp_Paragraph)  
        .post(authenticated.isAuthenitcated,ampDocument.create_amp_Paragraph);

    app.route('/users/:userId/amp/paragraph/:ampParagraphId')
        .get(authenticated.isAuthenitcated,ampDocument.read_amp_Paragraph)
        .put(authenticated.isAuthenitcated,ampDocument.update_amp_Paragraph)
        .delete(authenticated.isAuthenitcated,ampDocument.delete_amp_Paragraph);    

};
