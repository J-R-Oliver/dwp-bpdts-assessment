const {
  selectAllPeople,
  selectPeopleLondon
} = require('../models/people.models');

exports.getAllPeople = async (req, res, next) => {
  try {
    const people = await selectAllPeople();
    res.send({ people });
  } catch (error) {
    next(error);
  }
};

exports.getPeopleLondon = async (req, res, next) => {
  try {
    const people = await selectPeopleLondon();
    res.send({ people });
  } catch (error) {
    next(error);
  }
};
