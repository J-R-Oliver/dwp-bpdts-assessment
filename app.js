const express = require('express');
const { logger, errorLogger } = require('./utils/logging');
const { handle404 } = require('./controllers/error.controllers');

const app = express();

app.use(logger);

app.use(errorLogger);
app.use(handle404);

module.exports = app;
