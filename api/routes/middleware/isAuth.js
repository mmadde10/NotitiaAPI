var firebase = require('firebase');

module.exports = {
    isAuthenitcated: function (req, res, next){
        var user = firebase.auth().currentUser;
        if(user !== null){
            req.user = user;
            next();
        }
        else{
            res.status(401);
        }
    }
}