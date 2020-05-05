const authRouter = require('express').Router();

authRouter.get('/', function (req, res, next) {
    res.send({auth: "Auth module connected"});
})

module.exports = authRouter;