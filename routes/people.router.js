const peopleRouter = require('express').Router();
const { getAllPeople } = require('../controllers/people.controller');
const {
  handleUnsupportedMethods
} = require('../controllers/error.controllers');

peopleRouter.route('/').get(getAllPeople).all(handleUnsupportedMethods);

module.exports = peopleRouter;
