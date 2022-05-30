const { startingServerPromise } = require('../src/server');
const app = require('../src/app');
const assert = require('assert');
const request = require('supertest');

describe('Testing requests integrated with mongodb', () => {
  before(async () => {
    await startingServerPromise;
  });
  describe('testing apis', () => {
    it('get request returns 200 status code', async () => {
      const response = await request(app).get('/shortlinks');
      assert(response.statusCode === 200);
    });

    it('post request returns 201 status code', async () => {
      const response = await request(app).post('/shortlinks').send({ webFull: 'test' });
      assert(response.statusCode === 201);
    });
  });
});
