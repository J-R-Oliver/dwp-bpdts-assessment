const { apiGetAllUsers, apiGetUsersLondon } = require('../utils/api');
const { withinDistanceLondon } = require('../utils/utils');

exports.selectAllPeople = async () => {
  const { data } = await apiGetAllUsers();
  return data;
};

exports.selectPeopleLondon = async () => {
  const apiCalls = [apiGetUsersLondon(), apiGetAllUsers()];

  const [{ data: usersByCity }, { data: allUsers }] = await Promise.all(
    apiCalls
  );

  const filteredUsers = allUsers.filter(withinDistanceLondon);

  return [...usersByCity, ...filteredUsers];
};
