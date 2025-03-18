const request = require('supertest');
const app = require('../server');

describe('Task API', () => {
  it('GET /api/tasks should require auth', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(401);
  });
});