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

  describe('/api', () => {
    describe('unsupported methods', () => {
      it('status: 405 - responds with Method Not Allowed', () => {
        const methods = [
          'get',
          'post',
          'put',
          'delete',
          'options',
          'trace',
          'patch'
        ];

        const requestPromises = methods.map(method => {
          // eslint-disable-next-line security/detect-object-injection
          return request(app)
            [method]('/api')
            .expect(405)
            .then(({ body }) => {
              expect(body.msg).toBe('Method Not Allowed');
            });
        });

        return Promise.all(requestPromises);
      });
    });
  });
});
