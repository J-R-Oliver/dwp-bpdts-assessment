const { selectAllPeople } = require('../models/people.models');

exports.getAllPeople = async (req, res, next) => {
  try {
    const people = await selectAllPeople();
    res.send({ people });
  } catch (error) {
    next(error);
  }
};
