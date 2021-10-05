const express = require("express");
const { UserModel } = require("../models/model");
const registerRouter = express.Router();
const bodyParser = require('body-parser');

registerRouter.use(bodyParser.json());

registerRouter.get('/', async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
});

registerRouter.post('/', async (req, res) => {
    await UserModel.create(req.body);
    res.status(201).send(user);
});

module.exports = registerRouter;