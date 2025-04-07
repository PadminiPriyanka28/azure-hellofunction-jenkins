// test/app.test.js
const request = require('supertest');
const expressApp = require('../app');  // Import the Express app

describe('GET /', () => {
  it('should return 200 status code', async () => {
    const response = await request(expressApp).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
