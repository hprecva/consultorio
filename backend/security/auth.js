let jwt = require('jwt-simple');

let auth = {
    genToken : function () {
        let expires = this.expiresIn(7);
        let token = jwt.encode({
            exp: expires }, require('./secret')());
        return {
            token : token,
            expires : expires
        };
    },
    expiresIn : function (numDays) {
        let dateObj = new Date();
        return dateObj.setDate(dateObj.getDate() + numDays);    
    }
}

module.exports = auth;