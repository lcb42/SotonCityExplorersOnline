'use strict';
const authRouter = require('express').Router();

const Models = require('../models/')

authRouter.get('/', async (req, res, next) => {
    const units = await Models.Unit.findAll();
    res.send({units: units});
});

authRouter.get('/:id', async (req,res) => {
    const unit = await  Models.Unit.findAll({where: {id: req.params.id}})
    res.send(unit[0]);
})

authRouter.get('/:unitId/members', async (req,res) => {
    const members = await  Models.Member.findAll({where: {unitId: req.params.unitId}})
    res.send(members);
})

authRouter.get('/:unitId/members/:memberId', async (req,res) => {
    const member = await  Models.Member.findAll({where: {unitId: req.params.unitId, id: req.params.memberId}})
    res.send(member[0]);
})

module.exports = authRouter;