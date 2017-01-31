const mongoose = require('mongoose');
const User = require('./User');
const Order = mongoose.Schema({
  customer: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
  address: {
    streetaddress:{type: String, required: true},
    unitnumber:{type: String, required: false},
    city:{type: String, required: true},
    state:{type: String, required: true},

  }
  quantities: {},
  timestamp: {type: Date, required: yes},

  photourl: {type: String, required: true},
  timestamp: {type: Date, required: true},
  likes: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
  location: {type: String, required: false},
  comments: [
      {
        username: {type: String, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        comment: {type: String}
      }
    ],
  description: {type: String, required: false},
  filter: {type: String, required: false}
});
module.exports = mongoose.model('Post', Post);
