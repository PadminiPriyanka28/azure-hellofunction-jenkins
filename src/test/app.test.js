
const request = require('supertest');
const expressApp = require('../functions/HttpTrigger'); // Adjust path if needed

describe('HTTP Function Tests', () => {
  
    // Test Case 1: GET / should return 200 status and "Hello, World!" message
    it('should return 200 status code and "Hello, World!"', async () => {
        const response = await request(expressApp).get('/');
        
        // Log response for debugging
        console.log('Response body:', response.body);
        console.log('Response status:', response.status);

        expect(response.status).toBe(200);  // Check for 200 status code
        expect(response.text).toBe('Hello, World!');  // Check for correct response text
    });

    // Test Case 2: GET /invalid should return 404 status
    it('should return 404 status for invalid URL', async () => {
        const response = await request(expressApp).get('/invalid');
        
        // Log response for debugging
        console.log('Response body:', response.body);
        console.log('Response status:', response.status);

        expect(response.status).toBe(404);  // Check for 404 status code
    });

    // Test Case 3: POST to a non-existent route should return 404 status
    it('should return 404 status for POST request to non-existent route', async () => {
        const response = await request(expressApp).post('/post-endpoint'); // Testing POST request to a non-existent endpoint

        // Log response for debugging
        console.log('Response body:', response.body);
        console.log('Response status:', response.status);

        expect(response.status).toBe(404);  // Expecting 404 since the route doesn't exist
    });

});

