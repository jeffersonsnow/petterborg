const mongoose = require('mongoose');
const Order = require('./User');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email:{type: String, require: true, unique: true},
    password:{type: String, require:true},
    ordersplaced: [{type: mongoose.Schema.Types.ObjectId, ref:"Order"}],
});

module.exports = mongoose.model('User', userSchema);
