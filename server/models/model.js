const mongoose = require('mongoose');
const UserSchema = require('./user.model');


const UserModel = mongoose.model("user", UserSchema);

module.exports = {
    UserModel,
}