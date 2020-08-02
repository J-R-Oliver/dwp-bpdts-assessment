const request = require('supertest');
const app = require('../app');

describe('app', () => {
  it('status: 404 - responds with Not Found on unsupported routes', () => {
    return request(app)
      .get('/unsupported')
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe('Not Found');
      });
  });
});
