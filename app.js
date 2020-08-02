const express = require('express');
const { logger, errorLogger } = require('./utils/logging');
const apiRouter = require('./routes/api.router');
const {
  handle404,
  handleInternalErrors
} = require('./controllers/error.controllers');

const app = express();

app.use(logger);
app.use('/api', apiRouter);

app.use(errorLogger);
app.use(handle404);
app.use(handleInternalErrors);

module.exports = app;
