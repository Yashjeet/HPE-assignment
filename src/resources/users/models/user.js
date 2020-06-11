const Mongoose = require('mongoose');

const Schema = Mongoose.Schema

const userSchema = new Schema({
    name: String,
    mobile: Number
},{timestamps: true});

const UserModel = Mongoose.model("user", userSchema);

module.exports = UserModel;