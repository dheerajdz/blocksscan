const { default: rateLimit } = require('express-rate-limit');
const ApiPlan = require('../models/apiPlan');
const User = require('../models/user');
const apiPlan = require('../models/apiPlan');




exports.switchApiPlan = async (req, res) => {
    try {
        const { name, plan_id } = req.body;


        const plan = await ApiPlan.findOne({ plan_id });
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }


        const user = await User.findOneAndUpdate(
            { name },
            { apiPlan: plan._id },
            { new: true } // Return the updated user
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({
            message: 'Plan switched successfully',
            apiPlan: plan,
            user: user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};




