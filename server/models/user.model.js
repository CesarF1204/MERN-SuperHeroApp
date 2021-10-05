const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    created_at: { type: Date, default: Date.now }
});

module.exports = UserSchema;