// main starting point for server

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//DB setup
const mongoURL = process.env.MONGO_URL;
const mongoPort = process.env.MONGO_PORT;
console.log("mongo: ", mongoURL, mongoPort);
mongoose.connect('mongodb://'+mongoURL+':'+mongoPort+'/auth');

// App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// server setup
const port = process.env.PORT || 3090;
//const server = http.createServer(app);
var server = http.createServer(app).listen(port, function(){
  console.log('Server listening on: ', port);
});

module.exports = server;
