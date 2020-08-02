const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://bpdts-test-app.herokuapp.com'
});

exports.apiGetAllUsers = () => instance.get('/users');

exports.apiGetUsersLondon = () => instance.get('/city/London/users');
