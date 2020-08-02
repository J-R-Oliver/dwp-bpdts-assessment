const express = require('express');
const { handle404 } = require('./controllers/error.controllers');

const app = express();

app.use(handle404);

module.exports = app;
