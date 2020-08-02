const request = require('supertest');
const app = require('../app');

jest.mock('../utils/utils');

describe('Internal Server Error', () => {
  it('Status: 500 - responds with Internal Server Error when an unhandled error is encountered', () => {
    return request(app)
      .get('/api/people/london')
      .expect(500)
      .then(({ body }) => {
        expect(body.msg).toBe('Internal Server Error');
      });
  });
});
