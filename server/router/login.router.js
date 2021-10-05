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
                res.send({message:"login sucess",user: user})
            }else{
                res.send({message:"wrong credentials"})
            }
        }else{
            res.send("not register")
        }
    })
});

module.exports = loginRouter;