const request = require('supertest');
const app = require('../app');
const User = require('../models/user');
const mongoose = require('mongoose');

beforeAll(async () => {
    const url = process.env.MONGODB_URL || 'mongodb://localhost:27017/testDatabase';
    await mongoose.connect(url);
});

beforeEach(async () => {
    await User.deleteMany();
    await User.create([
        { name: 'John Doe', email: 'john.doe@example.com' },
        { name: 'Jane Doe', email: 'jane.doe@example.com' }
    ]);
});

afterAll(async () => {
    await mongoose.disconnect();
});

describe('User Controller', () => {
    describe('POST /api/users', () => {
        it('should create a new user with valid data', async () => {
            const response = await request(app)
                .post('/api/users')
                .send({ name: 'John Smith', email: 'john.smith@example.com' });

            expect(response.status).toBe(201);
            expect(response.body.name).toBe('John Smith');
            expect(response.body.email).toBe('john.smith@example.com');
        });

        it('should return 400 when required fields are missing', async () => {
            const response = await request(app)
                .post('/api/users')
                .send({ name: 'John Doe' });  // Missing email

            expect(response.status).toBe(400);
        });

        it('should return 409 if the user already exists', async () => {


            await request(app)
                .post('/api/users')
                .send({ name: 'John Doe', email: 'john.doe@example.com' });


            const response = await request(app)
                .post('/api/users')
                .send({ name: 'Jane Doe', email: 'john.doe@example.com' });

            expect(response.status).toBe(409);
        });
    });

    describe('GET /api/users', () => {
        it('should fetch all users successfully', async () => {
            const response = await request(app).get('/api/users');

            expect(response.status).toBe(200);
            expect(response.body.length).toBeGreaterThan(0);

            // Check for the correct names, regardless of order
            const names = response.body.map(user => user.name);
            expect(names).toContain('John Doe');
            expect(names).toContain('Jane Doe');
        });
    });

});