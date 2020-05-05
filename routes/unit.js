'use strict';
const authRouter = require('express').Router();

const Models = require('../models/')

authRouter.get('/', async (req, res, next) => {
    const units = await Models.Unit.findAll();
    res.send({units: units});
})

module.exports = authRouter;