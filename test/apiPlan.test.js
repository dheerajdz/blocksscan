// const request = require('supertest');
// const app = require('../app'); // Adjust the path to your app file
// const User = require('../models/user');
// const mongoose = require('mongoose')
// const ApiPlan = require('../models/apiPlan');






// beforeAll(async () => {
//     const url = 'mongodb://localhost:27017/testDatabase';
//     await mongoose.connect(url);

//     await ApiPlan.deleteMany({});  // Clear existing data before all tests
//     await User.deleteMany({});     // Clear Users as well if needed

//     // Seed API Plans for tests
//     await ApiPlan.create([
//         { plan_id: 1, price: "free", max_req_per_sec: 3 },
//         { plan_id: 2, price: "Premium", max_req_per_sec: 2 },
//         { plan_id: 3, price: "Delight", max_req_per_sec: 3 }
//     ]);

//     const plansInDb = await ApiPlan.find();
//     console.log('Plans in DB after seeding:', plansInDb);
// });


// beforeEach(async () => {
//     // Clean up previous data
//     await User.deleteMany();




// });


// afterAll(async () => {
//     await mongoose.disconnect();
// });



// //Test ApiPlan Controller

// describe('Api Plan Controller', () => {
//     let testuser, existingPlan;

//     beforeEach(async () => {

//         // Log the existing plans to verify they are inserted
//         const existingPlans = await ApiPlan.find();
//         console.log('Plans in DB after seeding:', existingPlans);

//         existingPlan = await ApiPlan.findOne({ plan_id: 1 })

//         if (!existingPlan) {
//             throw new Error('Seeded Api plan not found! run the seeding script first')
//         }

//         testuser = await User.create({
//             name: 'Dee',
//             email: 'deekhatiya@gmail.com',
//             apiPlan: null
//         })

//         console.log('Test User created:', testuser);


//     });

//     it('should assign an ApiPlan to a user', async () => {



//         const res = await request(app)
//             .post('/api/apiplans/create-plan')
//             .send({ userId: testuser._id, planId: existingPlan.plan_id });


//         console.log('UserId:', testuser._id, 'PlanId:', existingPlan.plan_id);


//         // Manually fetch the user to check if the apiPlan is assigned
//         const updatedUser = await User.findById(testuser._id).populate('apiPlan');

//         console.log('Updated User:', updatedUser);


//         console.log('Response received:', res.body);


//         expect(res.status).toBe(200);
//         expect(res.body.message).toBe('API Plan assigned successfully');
//         expect(res.body.user.apiPlan).not.toBeNull();
//         expect(res.body.user.apiPlan.plan_id).toBe(1);

//     })


//     it('should return 400 if required fields are missing', async () => {

//         const res = await request(app)
//             .post('/api/apiplans/create-plan')
//             .send({
//                 userId: testuser._id,
//                 //missing planid
//             })


//         expect(res.status).toBe(400);
//         expect(res.body.message).toBe('Missing required fields');

//     })


//     it('should return 404 if API plan does not exist', async () => {

//         const res = await request(app)
//             .post('/api/apiplans/create-plan')
//             .send({ userId: testuser._id, planId: 9999 });


//         expect(res.status).toBe(404);
//         expect(res.body.message).toBe('API Plan not found');

//     })

//     it('should return 404 if user does not exist', async () => {
//         const res = await request(app)
//             .post('/api/apiplans/create-plan')
//             .send({ userId: new mongoose.Types.ObjectId(), planId: existingPlan.plan_id });

//         expect(res.status).toBe(404);
//         expect(res.body.message).toBe('User not found');
//     });


//     it('should fetch all available API plans', async () => {
//         const res = await request(app).get('/api/apiplans/api-plans');

//         expect(res.status).toBe(200);
//         expect(Array.isArray(res.body)).toBe(true);
//         expect(res.body.length).toBeGreaterThan(0);
//         expect(res.body[0]).toHaveProperty('plan_id');
//     });
// });




const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/user');
const ApiPlan = require('../models/apiPlan');

const DB_URL = 'mongodb://localhost:27017/testDatabase';

beforeAll(async () => {
    await mongoose.connect(DB_URL);
    await ApiPlan.deleteMany({});
    await User.deleteMany({});

    // Seed API Plans
    const plans = await ApiPlan.insertMany([
        { plan_id: 1, price: "free", max_req_per_sec: 3 },
        { plan_id: 2, price: "Premium", max_req_per_sec: 2 },
        { plan_id: 3, price: "Delight", max_req_per_sec: 3 }
    ]);
    console.log(' Seeded API Plans:', plans);
});

beforeEach(async () => {


    // Clean up user data before each test
    await User.deleteMany({});

    // Seed the users
    const users = await User.create([
        { name: 'John Doe', email: 'john.doe@example.com' },
        { name: 'Jane Doe', email: 'jane.doe@example.com' }
    ]);
    console.log('Seeded Users:', users);

    // Use one of the seeded users for the test
    testUser = users[0];
    console.log(' Test User:', testUser);
});

afterAll(async () => {
    await mongoose.disconnect();
});

describe('API Plan Controller Tests', () => {
    let existingPlan;

    beforeEach(async () => {


        // Ensure an existing plan is available for assignment
        existingPlan = await ApiPlan.findOne({ plan_id: 1 });
        if (!existingPlan) {
            throw new Error(' Seeded API plan not found! Ensure seeding is successful.');
        }

        console.log(' Existing API Plan:', existingPlan);
    });

    it('should assign an API Plan to a user', async () => {

        // Assign the existing plan to the created user
        const res = await request(app)
            .post('/api/apiplans/create-plan')
            .send({
                userId: testUser._id.toString(),
                planId: existingPlan.plan_id
            });

        console.log(' API Response:', res.status, res.body);

        const updatedUser = await User.findById(testUser._id).populate('apiPlan');

        expect(res.status).toBe(200);
        expect(res.body.message).toBe('API Plan assigned successfully');
        expect(updatedUser.apiPlan).not.toBeNull();
        expect(updatedUser.apiPlan._id.toString()).toBe(existingPlan._id.toString());
    });

    it('should return 400 if required fields are missing', async () => {
        const res = await request(app)
            .post('/api/apiplans/create-plan')
            .send({ userId: testUser._id.toString() }); // Missing planId

        console.log(' Missing Fields Response:', res.status, res.body);

        expect(res.status).toBe(400);
        expect(res.body.message).toBe('Missing required fields');
    });

    it('should return 404 if API plan does not exist', async () => {
        const fakePlanId = 9999; // Non-existent plan_id

        const res = await request(app)
            .post('/api/apiplans/create-plan')
            .send({ userId: testUser._id.toString(), planId: fakePlanId });

        console.log(' Invalid Plan Response:', res.status, res.body);

        expect(res.status).toBe(404);
        expect(res.body.message).toBe('API Plan not found');
    });

    it('should return 404 if user does not exist', async () => {
        const fakeUserId = new mongoose.Types.ObjectId().toString();

        const res = await request(app)
            .post('/api/apiplans/create-plan')
            .send({ userId: fakeUserId, planId: existingPlan.plan_id });

        console.log(' Invalid User Response:', res.status, res.body);

        expect(res.status).toBe(404);
        expect(res.body.message).toBe('User not found');
    });

    it('should fetch all available API plans', async () => {
        const res = await request(app).get('/api/apiplans/api-plans');

        console.log(' Fetched API Plans:', res.status, res.body);

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0]).toHaveProperty('plan_id');
    });
});
