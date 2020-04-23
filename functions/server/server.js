const express = require('express');
const serverless = require('serverless-http');
const airports = require('./routes/airports');
const app = express();

app.use('/.netlify/functions/server/api', airports);
module.exports = app;
module.exports.handler = serverless(app);
