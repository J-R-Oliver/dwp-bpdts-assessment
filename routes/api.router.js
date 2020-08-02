const apiRouter = require('express').Router();
const {
  handleUnsupportedMethods
} = require('../controllers/error.controllers');

apiRouter.route('/').all(handleUnsupportedMethods);

module.exports = apiRouter;
