let auth = require('./auth');

let TokenAPI = {
    generate: function( request, response) {
        response.send( auth.genToken());
    }
};

module.exports = TokenAPI;