const peopleRouter = require('express').Router();
const {
  getAllPeople,
  getPeopleLondon
} = require('../controllers/people.controller');
const {
  handleUnsupportedMethods
} = require('../controllers/error.controllers');

peopleRouter.route('/').get(getAllPeople).all(handleUnsupportedMethods);
peopleRouter
  .route('/london')
  .get(getPeopleLondon)
  .all(handleUnsupportedMethods);

module.exports = peopleRouter;
