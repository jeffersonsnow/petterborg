var app = require('../index.js');
const User = require('../models/User');

module.exports = {
  signup: function(req, res){
    User.create({email: req.body.email, password: req.body.password}, function(err, user){
      if(err){
        res.status(500).json(err)
      }
      else {
        res.status(200).json('user created')
      }
    })
  }
};
