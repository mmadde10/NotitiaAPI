'use strict';
var mongoose = require('mongoose');
var firebase = require('firebase');
const userToken = require('../../Secure/secureSO').token;

exports.Auth_User = function(req, res, next){
    firebase.auth().signInWithCustomToken(userToken).then(function(user){
         res.redirect('/users'); 
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        if (errorCode === 'auth/invalid-custom-token') {
          res.send('The token you provided is not valid.');
        } 
        else {
          console.error(error);
          res.send(error);
        }
    })
};
