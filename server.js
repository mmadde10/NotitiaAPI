'use strict'
var secure = require ('./secure.js');
var mongoose = require('mongoose');

if(secure == null || undefined){
    console.log('NO Secure FILES');
    return;
}
var mongoDB = `mongodb://${secure.userName}:${secure.password}@${secure.server}/${secure.db}`;
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var app = require('./app.js'),
    server,
    PORT = 8080,
    NODE_ENV = process.env.NODE_ENV || 'development';

// START THE SERVER
// =============================================================================
server = app.listen(PORT, () => {
    console.log(`${NODE_ENV} app listening `);
    });       