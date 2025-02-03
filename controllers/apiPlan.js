// const ApiPlan = require('../models/apiPlan');
// const User = require('../models/user')
// const ApiKey = require('../models/apiKey');

// // Create a new API plan
// exports.createApiPlan = async (req, res) => {
//     try {
//         const { userId, planId } = req.body;


//         if (!userId || !planId) {
//             return res.status(400).json({ message: 'Missing required fields' });
//         }

//         // Check if the API plan exists
//         const apiPlan = await ApiPlan.findOne({ plan_id: planId });
//         if (!apiPlan) {
//             return res.status(404).json({ message: 'API Plan not found' });

//         }




//         // Update the user's API plan
//         const user = await User.findByIdAndUpdate(userId, { apiPlan: apiPlan._id }, { new: true }).populate('apiPlan');
//         console.log('User after update:', user);



//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.status(200).json({ message: 'API Plan assigned successfully', user });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };

// // Fetch all available API plans
// exports.getAllApiPlans = async (req, res) => {
//     try {
//         const apiPlans = await ApiPlan.find() // Fetch all API plans from the database
//         res.status(200).json(apiPlans); // Return the list of all API plans
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };



const ApiPlan = require('../models/apiPlan');
const User = require('../models/user');
const ApiKey = require('../models/apiKey');

// Create a new API plan
exports.createApiPlan = async (req, res) => {
    try {
        const { userId, planId } = req.body;

        if (!userId || !planId) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Check if the API plan exists
        const apiPlan = await ApiPlan.findOne({ plan_id: planId });
        if (!apiPlan) {
            return res.status(404).json({ message: 'API Plan not found' });
        }

        console.log('Existing API Plan:', apiPlan);

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('Test User:', user);

        // Update the user's API plan
        user.apiPlan = apiPlan._id;
        await user.save(); // Save the user with the new API plan

        // Populate the API plan field after saving the user
        await user.populate('apiPlan');

        res.status(200).json({ message: 'API Plan assigned successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Fetch all available API plans
exports.getAllApiPlans = async (req, res) => {
    try {
        const apiPlans = await ApiPlan.find(); // Fetch all API plans from the database
        res.status(200).json(apiPlans); // Return the list of all API plans
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
