const { apiGetAllUsers } = require('../utils/api');

exports.selectAllPeople = async () => {
  const { data } = await apiGetAllUsers();
  return data;
};
