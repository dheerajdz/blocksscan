const mongoose = require('mongoose');

const apiPlanSchema = new mongoose.Schema({
    plan_id: { type: Number, required: true, unique: true },
    price: { type: String, required: true },
    max_req_per_sec: { type: Number, required: true },
    inserted_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ApiPlan', apiPlanSchema);