let jwt = require('jwt-simple');
module.exports = function( req, res, next) {

    let token = (req.body && req.body.access_token)
    || (req.query && req.query.access_token)
    || req.headers['x_access_token'];

    if (token) {
        try {
            let decoded = jwt.decode(token, require('./secret')());

            if ( decoded.exp <= Date.now()) {
                res.status(400);
                res.json({
                    "status" : 400,
                    "message" : "Token Expired"
                });
                return;
            }
            next();
        } catch (err) {
            res.status(401);
            res.json({
                "status" : 401,
                "message" : "Invalid Token or Key",
                "error" : err 
            });
        }
    } else {
        res.status(401);
        res.json({
            "status" : 401,
            "message" : "Invalid Token or Key"
        });
        return;
    }
};