const mongoose = require('mongoose');
const ApiPlan = require('./models/apiPlan');  // Ensure the correct path to your ApiPlan model

mongoose.connect('mongodb://localhost:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    // Insert example API plans
    const plans = [
        {
            plan_id: 1,
            price: 'free',
            max_req_per_sec: 3
        },
        {
            plan_id: 2,
            price: 'Premium',
            max_req_per_sec: 2
        },
        {
            plan_id: 3,
            price: 'Delight',
            max_req_per_sec: 3
        }
    ];

    await ApiPlan.insertMany(plans);
    console.log('API plans inserted successfully');
}).catch(err => {
    console.error('Error inserting plans:', err);
});
