const request = require('supertest');
const app = require('../functions/HTTPTrigger');  // Your Azure Function app

describe('GET /', () => {
    it('should return 200 status code', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!');
    });
});
