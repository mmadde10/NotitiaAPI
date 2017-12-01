'use strict';
module.exports = function(app) {
    var ampDocument = require('../controllers/ampController');


    // todoList Routes
    app.route('/amp')
        .get(ampDocument.list_all_amp_documents)
        .post(ampDocument.create_amp_document);

    app.route('/amp/:ampId')
        .get(ampDocument.read_amp_document)
        .put(ampDocument.update_amp_document)
        .delete(ampDocument.delete_amp_document);

    app.route('/amp/element/')
        .get(ampDocument.list_all_amp_elements)  

    app.route('/amp/element/:ampElementId')
        .get(ampDocument.read_amp_element)
        .put(ampDocument.update_amp_element)
        .delete(ampDocument.delete_amp_element);
};
