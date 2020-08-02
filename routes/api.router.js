const apiRouter = require('express').Router();
const {
  handleUnsupportedMethods
} = require('../controllers/error.controllers');
const peopleRouter = require('./people.router');

apiRouter.route('/').all(handleUnsupportedMethods);
apiRouter.use('/people', peopleRouter);

module.exports = apiRouter;
