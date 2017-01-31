const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require ('../config.js');
const session = require('express-session');
const passport = require('passport');

const signUpControl = require('./controllers/signUpControl.js')
const loginControl = require('./controllers/loginControl.js')
const app = module.exports = express();


app.use(express.static(__dirname + './../public/dist'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
}); //preps data to put on session

passport.deserializeUser(function(user, done) {
  done(null, user);
});//gets data from session and preps for req.user


mongoose.connect(config.mongo);
mongoose.connection.once('open',() => console.log('Connected to Mongo'));

app.post('/api/signup', signUpControl.signup);
app.get('/api/login', loginControl.login);

app.listen(3000, function(){
  console.log('listening on port 3000');
});
