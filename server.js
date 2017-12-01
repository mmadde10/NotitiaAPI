'use strict'

var app = require('./app.js'),
    server,
    PORT = 8080,
    NODE_ENV = process.env.NODE_ENV || 'test';

// START THE SERVER
// =============================================================================
server = app.listen(PORT, () => {
    console.log(`${NODE_ENV} app listening `);
    });       