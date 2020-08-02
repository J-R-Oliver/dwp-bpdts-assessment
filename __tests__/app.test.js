const request = require('supertest');
const app = require('../app');

jest.mock('../utils/api');

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

    describe('/people', () => {
      describe('GET', () => {
        it('status: 200 - responds with an array of people', () => {
          return request(app)
            .get('/api/people')
            .expect(200)
            .then(({ body }) => {
              expect(body.people).toBeInstanceOf(Array);
            });
        });

        it('status: 200 - responds with an array of people objects', () => {
          return request(app)
            .get('/api/people')
            .expect(200)
            .then(({ body }) => {
              body.people.forEach(article => {
                expect(article).toHaveProperty('id');
                expect(article).toHaveProperty('first_name');
                expect(article).toHaveProperty('last_name');
                expect(article).toHaveProperty('email');
                expect(article).toHaveProperty('ip_address');
                expect(article).toHaveProperty('latitude');
                expect(article).toHaveProperty('longitude');
              });
            });
        });

        it('status: 200 - responds with all people', () => {
          return request(app)
            .get('/api/people')
            .expect(200)
            .then(({ body }) => {
              expect(body.people).toHaveLength(3);
            });
        });
      });

      describe('unsupported methods', () => {
        it('status: 405 - responds with Method Not Allowed', () => {
          const methods = [
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
});
