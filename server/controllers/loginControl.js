const User = require('../models/User');

module.exports = {
  login: function(req, res, next){
    User.find({email: req.query.email}, (err, user) =>{
      if(err) return res.status(500).json(err);
      return res.status(200).json(user);
    })
  }
}
