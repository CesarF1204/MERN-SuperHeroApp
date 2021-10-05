const express = require("express");
const { UserModel } = require("../models/model");
const loginRouter = express.Router();
const bodyParser = require('body-parser');

loginRouter.use(bodyParser.json());


loginRouter.post("/", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email}, (err, user) => {
        if(user){
            if(password === user.password){
                res.send({message:"Login Success!", user: user})
            }else{
                res.send({message:"Wrong credentials. Please try again."})
            }
        }else{
            res.send("not register")
        }
    })
});

module.exports = loginRouter;