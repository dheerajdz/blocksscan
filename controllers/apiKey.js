const ApiPlan = require('../models/apiPlan')
const User = require("../models/user");
const ApiKey = require('../models/apiKey');
const crypto = require("crypto");


// Function to generate an API key
const generateApiKey = () => {
    return crypto.randomBytes(32).toString("hex"); // Generates a random 64-character API key
};



// Create a new API key for a user
exports.createApiKey = async (req, res) => {
    try {

        const { userId } = req.body; // Get userId from the request body
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }



        // Check if the user already has 3 API keys
        if (user.apiKeys.length >= 3) {
            return res.status(400).json({ message: "Cannot have more than 3 API keys" });
        }

        // Generate a new API key
        const apiKey = generateApiKey();




        // Save the API key in the database
        const newApiKey = new ApiKey({
            key: apiKey,
            userId: user._id,

        });
        await newApiKey.save();

        // Add the new API key reference to the user's apiKeys array
        user.apiKeys.push(newApiKey._id);
        await user.save();

        res.status(201).json({ message: "API key created successfully", apiKey });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/// Fetch all API keys for a specific user by userId
exports.getApiKeysByUserId = async (req, res) => {
    try {
        const { userId } = req.params; // Get userId from route params
        const user = await User.findById(userId)
            .populate({
                path: "apiKeys",
                populate: {
                    path: "planId",
                    model: "ApiPlan" // Ensure the model name matches your schema definition
                }
            });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user.apiKeys); // Return all API keys with populated plan details
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
