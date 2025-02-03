const mongoose = require("mongoose");

const apiKeySchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    planId: { type: mongoose.Schema.Types.ObjectId, ref: "ApiPlan" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ApiKey", apiKeySchema);