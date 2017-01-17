const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require ('../config.js');



const app = module.exports = express();


app.use(express.static(__dirname + './../public/dist'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// mongoose.connect(config.mongo);
// mongoose.connection.once('open',() => console.log('Connected to Mongo'));


app.listen(3000, function(){
  console.log('listening on port 3000');
});
