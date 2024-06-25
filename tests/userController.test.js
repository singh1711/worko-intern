const request = require('supertest');
const app = require('../app');
const User = require('../models/userModels');
const server = require('../app');

// Example test case
afterAll(() => {
    server.close();  // Close the server after tests to avoid open handles
});
describe('GET /api/worko/user', () => {
    it('should return a list of users', async () => {
        const response = await request(app).get('/api/worko/user');
        expect(response.statusCode).toBe(200);
    });
});
